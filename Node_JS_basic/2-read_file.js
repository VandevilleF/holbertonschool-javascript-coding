const fs = require('fs');

function countStudents(path) {
  try {
    const read = fs.readFileSync(path, 'utf8');
    const lines = read.split('\n');
    const students = {};

    for (let i = 1; i < (lines.length - 1); i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }
    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
    console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
