/* eslint-disable no-unused-vars */
const fs = require('fs');

function countStudents(path) {
  try {
    const read = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    /* trim() supprime les espace blancs en début et fin de ligne */
    const lines = read.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const students = [];

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
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
