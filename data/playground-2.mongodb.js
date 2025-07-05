/* global use, db */
// MongoDB Playground
// Make sure you are connected to enable completions and to be able to run a playground.

// Select the database to use.
use('project1');

// Insert a few documents into the contacts collection.
db.getCollection('contacts').insertMany([
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    favoriteColor: 'blue',
    birthday: new Date('1995-05-15')
  },
  {
    firstName: 'Brian',
    lastName: 'Smith',
    email: 'brian.smith@example.com',
    favoriteColor: 'green',
    birthday: new Date('1993-11-22')
  },
  {
    firstName: 'Chloe',
    lastName: 'Lee',
    email: 'chloe.lee@example.com',
    favoriteColor: 'purple',
    birthday: new Date('1998-07-30')
  }
]);

// Find all contacts in the collection.
const contacts = db.getCollection('contacts').find().toArray();

// Print the contacts to the output window.
console.log('Contacts inserted:', contacts);
