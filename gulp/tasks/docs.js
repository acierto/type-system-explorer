import gulp from 'gulp';
import {srcDocsDir, destDocsDir} from '../utils/paths';

gulp.task('generate-docs', (cb) => {
    require('gulp-gitbook')(srcDocsDir, cb);
});

gulp.task('copy-docs', () => gulp
    .src(`${srcDocsDir}/_book/**`)
    .pipe(gulp.dest(destDocsDir)));

gulp.task('build-docs', gulp.series('generate-docs', 'copy-docs'));