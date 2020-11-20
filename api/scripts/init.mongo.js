db.users.remove({});

const userDB = [
  {
    id: 1,
    name: 'Atishek Kumar',
    age: 20,
    created: new Date('2020-11-16'),
  },
  {
    id: 2,
    name: 'Tarush',
    age: 19,
    created: new Date('2020-11-16'),
  },
];

db.users.insertMany(userDB);
const count = db.users.count();
print('Inserted', count, 'users');

db.counters.remove({ _id: 'users' });
db.counters.insert({ _id: 'users', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ created: 1 });
