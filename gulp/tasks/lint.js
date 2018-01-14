import tslint from 'gulp-tslint';
import gulp from 'gulp';

const lintStream = (stream) => stream
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report());

gulp.task('lint', () => lintStream(gulp.src('src/**/*.js')));