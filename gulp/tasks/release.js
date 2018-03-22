import gulp from 'gulp';
import {release} from 'gulp-release-it';

release(gulp);

gulp.task('build', gulp.series('clean', 'copy-assets', 'lint', 'webpack-development'));

gulp.task('complete-release', gulp.series('build', 'bump-complete-release'));
