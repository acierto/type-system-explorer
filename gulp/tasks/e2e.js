import gulp from 'gulp';
import testcafe from 'gulp-testcafe';

gulp.task('e2e', () => gulp.src('test/**/*.js').pipe(testcafe({browsers: ['chrome', 'firefox']})));