import gulp from 'gulp';
import {projectDir} from '../utils/paths';

gulp.task('copy-assets', () =>
    gulp
        .src(`${projectDir}/index.css`)
        .pipe(gulp.dest(`${projectDir}/dist`))
);