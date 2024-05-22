function readStdin() {
  process.stdin.setEncoding('utf8');
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('readable', function() {
    const read = process.stdin.read();
    process.stdout.write(`Your name is: ${read}`);
    process.stdout.write('This important software is now closing\n');
  });
}

module.exports = readStdin;

readStdin();
