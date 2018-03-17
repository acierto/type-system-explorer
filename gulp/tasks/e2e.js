import gulp from 'gulp';
import testcafe from 'gulp-testcafe';
import {devServer} from './dev-server';
import {xldMockServer} from './xld-mock-server';

gulp.task('e2e', gulp.series('start-xld-mock-server', 'dev-server', () =>
    gulp
        .src('test/**/*.js')
        .pipe(testcafe({browsers: ['chrome', 'firefox']}))
        .on('end', () => {
            devServer.close();
            xldMockServer.close();
        }))
);