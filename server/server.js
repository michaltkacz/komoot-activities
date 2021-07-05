const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const DataStore = require('nedb');

const app = express();
const database = new DataStore('./database/database.db');
database.loadDatabase();

app.get('/', (req, res) => {
  res.json('Server works');
});

app.get('/dev/fulldb', (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

app.get('/api/user/:userId/tours', cors(), async (req, res) => {
  const userId = req.params.userId;

  let currentPage = 0;
  let toursRaw = [];

  while (true) {
    // fetch page
    const url = `https://www.komoot.com/api/v007/users/${userId}/activities/?page=${currentPage}&limit=50`;
    let pageJson = {};
    try {
      const response = await fetch(url);
      pageJson = await response.json();
    } catch {
      console.error('User page fetch error');
    }

    // extract all tours from page
    const currentPageTours = pageJson._embedded.items;
    toursRaw.push(...currentPageTours);

    // go to next page
    currentPage += 1;

    // break, if no more pages
    if (currentPage >= pageJson.page.totalPages) {
      break;
    }
  }

  // make response (array of objects)
  const tours = await Promise.all(
    toursRaw.map(async (item) => {
      // creator info
      const c = item._embedded.creator;
      const tour_creator = {
        id: c.username,
        display_name: c.display_name,
      };

      // tour details
      const t = item._embedded.tour;
      const tour_details = {
        date: t.date,
        name: t.name,
        distance: t.distance,
        duration: t.duration,
        sport: t.sport,
        start_point: t.start_point,
        elevation_up: t.elevation_up,
        elevation_down: t.elevation_down,
        time_in_motion: t.time_in_motion,
        id: t.id,
      };

      // tour gepoints
      const url = item._embedded.tour._links.coordinates.href;
      let json = {};
      try {
        const response = await fetch(url);
        json = await response.json();
      } catch {
        console.error('Tour geopoints fetch error');
      }
      const tour_geopoints = json.items ?? {};

      // return in one object
      return { tour_creator, tour_details, tour_geopoints };
    })
  );

  // database.insert(tours);
  // return json
  res.json(tours);
});

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
