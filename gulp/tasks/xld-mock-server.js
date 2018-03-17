import {Promise} from 'bluebird';
import express from 'express';
import gulp from 'gulp';
import {serverPort} from '../utils/config';
import xldTypes from '../../src/data/xld-types.json';

export let xldMockServer;

gulp.task('start-xld-mock-server', () => new Promise((resolve) => {
    const app = express();
    app.get('/deployit/metadata/type', (req, res) => {
        res.send(xldTypes);
    });

    xldMockServer = app.listen(serverPort);
    resolve();
}));