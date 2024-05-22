const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const db = process.argv[2];

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(db)
      .then((data) => {
        res.write(`${data.studentsNumber}\n`);
        res.write(`${data.fieldCS}\n`);
        res.write(`${data.fieldSWE}\n`);
        res.end();
      })
      .catch((err) => {
        console.error(err.message);
        res.end();
      });
  }
});

app.on('error', (error) => {
  console.error('Server error:', error);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
