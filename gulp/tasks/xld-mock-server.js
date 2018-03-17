import express from 'express';
import gulp from 'gulp';
import {serverPort} from '../utils/config';
import xldTypes from '../../src/data/xld-types.json';

let server;

gulp.task('start-xld-mock-server', () => {
    const app = express();
    app.get('/deployit/metadata/type', (req, res) => {
        res.send(xldTypes);
    });

    server = app.listen(serverPort);
});

gulp.task('stop-xld-mock-server', () => {
    server.close();
});
