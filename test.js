var assert = require('chai').assert;
var fs = require('fs');
var store = require('./lib/store');

describe('store', () => {
    it('just checks whether we can call the api', done => {
        fs.readdir('./cats', (err, files) => { console.log(files);});
        done();
    });
    it('gets the foo', done => {
        fs.readFile('./cats/foo.json', "utf-8", (err, data) => { console.log(data);});
        done();
    });
});