#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

// const lstat = util.promisify(fs.lstat);

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.error(err);
    return;
  }

  const statPromises = filenames.map(async (filename) => {
    return lstat(filename);
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    console.log(filenames[index], stats.isFile());
  }
});

// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(stats);
//       }
//     });
//   });
// };
