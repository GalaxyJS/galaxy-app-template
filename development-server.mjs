import { startDevServer } from '@web/dev-server';
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

function buildStyles(done) {
  console.info('\x1b[34m%s\x1b[0m', 'Compiling styles...');
  gulp.src('src/assets/styles/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/styles'));
  console.info('\x1b[32m%s\x1b[0m', 'Compiled styles successfully!\n');
  done();
}

const watchAndBuildStyles = function (done) {
  gulp.watch([
    'src/assets/styles/**/*.scss',
  ], buildStyles);
  done();
}

gulp.task('watch-and-build-styles', gulp.series(buildStyles, watchAndBuildStyles));
gulp.task('watch-and-build-styles')((err) => {
  if (err) {
    console.error(err);
  }

  console.info('Watching styles is changes...\n');
})

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
