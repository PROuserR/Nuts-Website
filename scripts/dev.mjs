import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
let port = '3000';

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('--port=')) {
    port = arg.split('=')[1] || '3000';
  } else if ((arg === '--port' || arg === '-p') && args[i + 1]) {
    port = args[i + 1];
  }
}

const child = spawn('npx', ['next', 'dev', '-p', port, '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: process.env,
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
