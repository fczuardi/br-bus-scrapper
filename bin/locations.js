#!/usr/bin/env node

require('shelljs/global');
const download = require('download-file');
const config = require('../config');

const cacheDir = './cache';
const todayString = new Date().toISOString().slice(0, 10);

config.sites.forEach(site => {
    const file = site.files.places;
    const dir = `${cacheDir}/${site.name}`;
    const filename = file.filename;
    download(file.url, {
        directory: `${cacheDir}/${site.name}`,
        filename: filename
    }, err => {
        if (err) {
            throw err;
        }
        cp(`${dir}/${filename}`, `${dir}/${filename}.${todayString}`);
    });
});
