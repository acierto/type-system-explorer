import gulp from 'gulp';

gulp.task('watch', () => gulp.watch('src/**/*.js', gulp.parallel('lint')));
