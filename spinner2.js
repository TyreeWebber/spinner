let delay = 200;
const frames = ['|', '/', '-', '\\'];
const timeout = delay * frames.length;

const spinner = setInterval(() => {
  for (let i = 0; i < frames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${frames[i]}   `);
    }, delay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(spinner);
  process.stdout.write('\n');
}, 4000);