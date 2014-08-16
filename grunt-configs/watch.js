// -------------------------------------------------------------------------------
// GRUNT CONFIG: WATCH
// grunt-contrib-watch
// Continuously watches and live reloads with file changes.
// https://github.com/gruntjs/grunt-contrib-watch
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
	'use strict';
	grunt.config('watch', {
		html: {
			files: [
				'<%= gruntScope.srcHtmlFiles %>'
			],
			tasks: [
			]
		},
		sass: {
			files: [
				'<%= gruntScope.srcSassFiles %>'
			],
			tasks: [
				'scsslint',
				'sass:dist',
				'autoprefixer'
			]
		},
		js: {
			files: [
				'<%= gruntScope.srcJsFiles %>'
			],
			tasks: [
				'jshint', 'uglify:dist'
			]
		}
	});
};
