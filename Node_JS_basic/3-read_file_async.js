/* eslint-disable no-unused-vars */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();
      const students = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });
      console.log(`Number of students: ${lines.length}`);
      console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
