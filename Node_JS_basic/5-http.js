const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(db)
      .then((data) => {
        res.write(`${data}\n`);
        res.end();
      })
      .catch((err) => {
        console.error(err.message);
        res.end();
      });
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
