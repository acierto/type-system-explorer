import gulp from 'gulp';
import {pluginPort, serverPort} from '../utils/config';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import Q from 'q';
import webpackDevConfig from '../../build/webpack.dev.conf';

const target = `http://localhost:${serverPort}`;

const proxy = [{
    auth: 'admin:admin',
    changeOrigin: true,
    context: [
        '/deployit'
    ],
    target
}];

const startServer = (config) => {
    const serverStarted = Q.defer();

    const webpackInstance = webpack(config);
    webpackInstance.plugin('done', () => serverStarted.resolve());

    const server = new WebpackDevServer(webpackInstance, {
        disableHostCheck: true,
        hot: true,
        lazy: false,
        noInfo: false,
        proxy,
        publicPath: config.output.publicPath,
        quiet: false,
        stats: {colors: true}
    });
    server.listen(pluginPort);
    return serverStarted.promise;
};

gulp.task('dev-server', gulp.parallel('start-xld-mock-server', () => startServer(webpackDevConfig)));
