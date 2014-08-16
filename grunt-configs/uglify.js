// -------------------------------------------------------------------------------
// GRUNT CONFIG: UGLIFY
// grunt-contrib-uglify
// Concatenates and minifies JavaScript files.
// https://github.com/gruntjs/grunt-contrib-uglify
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
	'use strict';
	grunt.config('uglify', {

		// While watch is running, uglify JS completely to optimize file loading
		dist: {
			files: {
				'<%= gruntScope.distMainJsFile %>': '<%= gruntScope.srcJsFiles %>'
			},
			options: {
				banner: '<%= gruntScope.commentBanner %>'
			}
		},

		// If 'grunt debug' is used, don't uglify JS completely - just concatenate
		debug: {
			files: {
				'<%= gruntScope.distMainJsFile %>': '<%= gruntScope.srcJsFiles %>'
			},
			options: {
				mangle: false,
				beautify: true,
				compress: false,
				preserveComments: true,
				banner: '<%= gruntScope.commentBanner %>'
			}
		}
	});
};
