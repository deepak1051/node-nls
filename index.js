const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(filenames);
});
