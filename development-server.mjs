import { startDevServer } from '@web/dev-server';

async function main() {
  const server = await startDevServer({
    config: {
      rootDir: 'src',
      port: 8888,
      appIndex: 'src/index.html'
      // watch: true,
    },
    readCliArgs: false,
    readFileConfig: false,
  });
}

main();
