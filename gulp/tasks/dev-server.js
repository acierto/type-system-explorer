import {Promise} from 'bluebird';
import gulp from 'gulp';
import {pluginPort, serverPort} from '../utils/config';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackDevConfig from '../../build/webpack.dev.conf';

export let devServer;
const target = `http://localhost:${serverPort}`;

const proxy = [{
    auth: 'admin:admin',
    changeOrigin: true,
    context: [
        '/deployit'
    ],
    target
}];

const startServer = (config) => new Promise((resolve) => {
    const webpackInstance = webpack(config);
    webpackInstance.plugin('done', () => resolve());

    devServer = new WebpackDevServer(webpackInstance, {
        disableHostCheck: true,
        hot: true,
        lazy: false,
        noInfo: false,
        proxy,
        publicPath: config.output.publicPath,
        quiet: false,
        stats: {colors: true}
    });
    devServer.listen(pluginPort);
});

gulp.task('dev-server', () => startServer(webpackDevConfig));
