/*jshint mocha:true, expr: true */

var CacheBuster = require('../index');
var File = require('vinyl');
var ReadableStream = require('stream').Readable;
var expect = require('chai').expect;

function createBufferFile(filename, content) {
    var contentBuffer = new Buffer(content);
    return new File({
          cwd: '/',
          base: '/test/',
          path: '/test/' + filename,
          contents: contentBuffer
    });
}

function createStreamFile(filename, content) {
    var contentStream = ReadableStream({objectMode: true});
    contentStream.push(content);
    contentStream.push(null);
    return new File({
          cwd: '/',
          base: '/test/',
          path: '/test/' + filename,
          contents: contentStream
    });
}



describe('resource processing', function () {
    var bust;

    beforeEach(function () {
        bust = new CacheBuster();
    });

    it('should collect mappings of original to hashed filenames', function () {
        expect(true).to.not.equal(false);
    });

    it('should rename the file with hash included', function () {
        expect(true).to.not.equal(false);
    });

});


