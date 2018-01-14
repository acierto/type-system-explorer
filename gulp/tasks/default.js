import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', (cb) => runSequence('dev-server', 'watch', cb));
