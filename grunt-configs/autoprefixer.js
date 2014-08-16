// -------------------------------------------------------------------------------
// GRUNT CONFIG: AUTOPREFIXER
// grunt-autoprefixer
// Automatically adds vendor prefixes for required browser support using the 'Can I Use' database.
// https://github.com/nDmitry/grunt-autoprefixer
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
	'use strict';
	grunt.config('autoprefixer', {
		dist: {
			src: [
				'<%= gruntScope.distMainCssFile %>'
			]
		},
		options: {

			// Portfolio level standard for browser support
			browsers: [
				'last 2 versions'
			]
		}
	});
};
