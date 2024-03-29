var sys = require('sys');
var fs = require('fs');
var spawn = require('child_process').spawn;
var jsio = require('jsio');
var JSHINT = require('jshint').JSHINT;
jsio('import preprocessors.cls as cls');
jsio('import preprocessors.import as importc');

var exec = function(src) {
    var path = '.';
	var def = {
		path: path,
		src: src
	};
	importc(path, def);
	return def.src;
};

module.exports = exec;
/*
var filename = process.argv[2];
if (filename) {
    var preprocessed = preprocess('.', fs.readFileSync(process.argv[2], 'utf-8'));
    var jshintProcess = spawn('./node_modules/jshint/bin/jshint', ['-']);
    jshintProcess.stdout.pipe(process.stdout);
    jshintProcess.stderr.pipe(process.stderr);

    jshintProcess.on('exit', function(code) {
        process.exit(code);
    });

    jshintProcess.stdin.setEncoding('utf-8');
    jshintProcess.stdin.write(preprocessed + '\n', 'utf-8');
    jshintProcess.stdin.end();
}
*/
