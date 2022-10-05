const util = require('util');
const cp = require('child_process');
const exec = util.promisify(require('child_process').exec);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function auto_sweep_example() {
    const child = cp.spawn('python',  ['pkill_test.py'])
    child.stdout.pipe(process.stdout)
//   const prom = cp.exec('python', (stdout, stderr)=> {
//     console.log('stdout:', stdout);
//     console.error('stderr:', stderr);
//   })
  console.log("started");
  await sleep(2000);
  console.log("stopped");
  child.kill(2);
  console.log("finished");
}

auto_sweep_example();