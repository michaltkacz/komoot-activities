import Dexie from 'dexie';

const db = new Dexie('LocalDatabase');

db.version(1).stores({
  data: ',*tours',
});

const ddbDeleteTours = (userId) => {
  if (!userId) return;
  db.transaction('rw', db.users, () => {
    db.data.delete(userId.toString());
  }).catch((error) => {
    console.error(error);
  });
};

const ddbPutTours = (userId, tours) => {
  if (!userId) return;
  db.transaction('rw', db.data, () => {
    db.data.put(tours, userId.toString());
  }).catch(function (error) {
    console.error(error);
  });
};

const ddbGetTours = (userId) => {
  if (!userId) return;
  return db
    .transaction('r', db.data, async () => {
      return await db.data.get(userId.toString());
    })
    .catch((error) => {
      console.error(error);
    });
};

export { ddbDeleteTours, ddbPutTours, ddbGetTours };
export default db;
