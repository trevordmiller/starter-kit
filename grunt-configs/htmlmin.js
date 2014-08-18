// ================================================================================
// GRUNT CONFIG: HTMLMIN
// Minifies HTML.
// grunt-contrib-htmlmin
// https://github.com/gruntjs/grunt-contrib-htmlmin
// https://github.com/kangax/html-minifier#options-quick-reference
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('htmlmin', {
		dist: {
			expand: true,
			cwd: 'src/',
			src: '*.html',
			dest: 'dist/',
			options: {
				removeComments: true,
				collapseWhitespace: true
			}
		}
	});
};
