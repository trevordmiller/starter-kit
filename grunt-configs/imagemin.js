// ================================================================================
// GRUNT CONFIG: IMAGEMIN
// Minifies images using imagemin.
// grunt-contrib-imagemin
// https://github.com/gruntjs/grunt-contrib-imagemin
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('imagemin', {
		options: {
			optimizationLevel: 3
		},
		files: [{
			expand: true,
			cwd: 'src/',
			src: ['images/**/*.{png,jpg,gif,svg}'],
			dest: 'dist/'
		}]
	});
};
