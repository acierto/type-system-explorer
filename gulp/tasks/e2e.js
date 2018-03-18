import * as R from 'ramda';
import gulp from 'gulp';
import testcafe from 'gulp-testcafe';
import {projectDir} from '../utils/paths';
import {devServer} from './dev-server';
import {xldMockServer} from './xld-mock-server';

const runTestCafe = (browsers, onEnd = R.F) =>
    gulp
        .src('test/**/*.js')
        .pipe(testcafe({
            browsers,
            screenshotsPath: `${projectDir}/.screenshots`,
            takeScreenshotsOnFail: true
        }))
        .on('end', onEnd);

gulp.task('e2e', () => runTestCafe(['chrome']));

gulp.task('circle-e2e', gulp.series('dev-server', () => runTestCafe(['chrome:headless', 'firefox:headless'], () => {
    devServer.close();
    xldMockServer.close();
})));