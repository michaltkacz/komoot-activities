const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server works');
});

app.get('/api/deepsync/:userId', cors(), async (req, res) => {
  const userId = req.params.userId;
  const currentPageIndex = req.query.page ?? 0;
  const currentPageContentLimit = req.query.limit ?? 25;

  const toursUrl = `https://www.komoot.com/api/v007/users/${userId}/tours`;
  const toursUrlParams = `/?sport_types=&type=tour_recorded&sort_field=date&sort_direction=desc&status=public&page=${currentPageIndex}&limit=${currentPageContentLimit}`;

  const tours = [];
  let totalPages = 0;
  let totalItems = 0;

  try {
    // call external api
    const response = await fetch(toursUrl + toursUrlParams);
    if (!response.ok) {
      throw new Error('Call to external API failed');
    }
    // get tours data and get link to fetch coords
    const currentPageContent = await response.json();
    const currentPageTours = currentPageContent._embedded.tours.map((tour) => {
      return {
        id: tour.id ?? null,
        date: tour.date ?? null,
        name: tour.name ?? null,
        distance: tour.distance ?? null,
        duration: tour.duration ?? null,
        sport: tour.sport ?? null,
        startPoint: tour['start_point'] ?? null,
        elevationUp: tour['elevation_up'] ?? null,
        elevationDown: tour['elevation_down'] ?? null,
        timeInMotion: tour['time_in_motion'] ?? null,
        lastModified: tour['changed_at'] ?? null,
        coords: tour['_links']['coordinates']['href'] ?? null,
      };
    });
    // get pagination info
    totalPages = currentPageContent.page.totalPages;
    totalItems = currentPageContent.page.totalElements;
    tours.push(...currentPageTours);
  } catch {
    console.error('User page fetch error');
  }

  // fetch coords and combine them with tour data
  const toursFinal = await Promise.all(
    tours.map(async (tour) => {
      const coordsUrl = tour.coords;
      try {
        const response = await fetch(coordsUrl);
        if (response.ok) {
          const pageContent = await response.json();
          const tourCoords = pageContent.items ?? {};
          return { ...tour, coords: tourCoords };
        }
      } catch {
        console.error('Tour geopoints fetch error');
        return { ...tour, coords: null };
      }
    })
  );

  // return data
  res.json({
    tours: toursFinal,
    pages: {
      currentPage: currentPageIndex,
      totalPages: totalPages,
      itemsPerPage: currentPageContentLimit,
      totalItems: totalItems,
    },
  });
});

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
