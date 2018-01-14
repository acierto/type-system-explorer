import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import identity from 'gulp-identity';
import webpackDevConfig from '../../build/webpack.dev.conf';

const createDist = ({config, plumb = false}) => gulp
    .src(`src/**/*.ts`)
    .pipe(plumb ? plumber() : identity())
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest('dist'));

gulp.task('webpack-development', () => createDist({config: webpackDevConfig, plumb: true}));
