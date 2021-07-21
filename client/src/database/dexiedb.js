import Dexie from 'dexie';

const db = new Dexie('LocalDatabase');

db.version(1).stores({
  users: ',*tours',
});

const ddbDeleteTours = (userId) => {
  if (!userId) return;
  db.transaction('rw', db.users, () => {
    db.users.delete(userId.toString());
  }).catch((error) => {
    console.error(error);
  });
};

const ddbPutTours = (userId, tours) => {
  if (!userId) return;
  db.transaction('rw', db.users, () => {
    db.users.put(tours, userId.toString());
  }).catch(function (error) {
    console.error(error);
  });
};

const ddbGetTours = (userId) => {
  if (!userId) return;
  return db
    .transaction('r', db.users, async () => {
      return await db.users.get(userId.toString());
    })
    .catch((error) => {
      console.error(error);
    });
};

export { ddbDeleteTours, ddbPutTours, ddbGetTours };
export default db;
