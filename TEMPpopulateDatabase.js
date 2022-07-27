import { query } from './server/models/model.js';
import { createClient } from 'pexels';
import { v4 as uuidv4 } from 'uuid';
/* eslint-disable */
const categories = [
  'Backpacks',
  'Tents',
  'Sleeping bags',
  'Hammocks',
  'Kitchen',
  'Furniture',
  'Water',
  'Lighting',
  'Electronics',
  'Gadgets',
  'Hiking',
  'Health',
  'Accesories',
];

// const apiKey = '563492ad6f917000010000013e5c113b389d4d00ac1e63001df0c69e';
// const client = createClient(apiKey);
// let city = '10001';

// for (const [i, cat] of categories.entries()) {
//   client.photos
//     .search({ query: cat, locale: 'en-US', per_page: 60 })
//     .then((photos) => {
//       const itemText = `
//         INSERT INTO items (_id, user_id, name, cost, location, category)
//         VALUES ($1, $2, $3, $4, $5, $6)
//         `;

//       const imageText = `
//       INSERT INTO images (image_id, url)
//       VALUES ($1, $2)
//       `;
//       for (const photo of photos.photos) {
//         city = city === '10001' ? '10001' : '85260';
//         const itemID = uuidv4();
//         query(itemText, [
//           itemID,
//           `myemail${i}@mail.com`,
//           `really cool backpack${i}`,
//           String(Math.trunc(Math.random() * 100)),
//           city,
//           cat,
//         ]);

//         query(imageText, [itemID, photo.url]);
//       }
//     });
// }

// const itemText = `
//         INSERT INTO items (_id, user_id, name, cost, location, category)
//         VALUES ($1, $2, $3, $4, $5, $6)
//         `;

// query(itemText, [
//   uuidv4(),
//   `myemail9@mail.com`,
//   `really cool backpack`,
//   String(Math.trunc(Math.random() * 100)),
//   city,
//   'backpacks',
// ]);
console.log(uuidv4());
