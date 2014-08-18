// ================================================================================
// GRUNT CONFIG: IMAGEMIN
// Minifies images using imagemin.
// grunt-contrib-imagemin
// https://github.com/gruntjs/grunt-contrib-imagemin
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('usebanner', {
		files: {
			src: [
				'<%= gruntScope.distHtmlFiles %>',
			]
		},
		options: {
			position: 'top',
			banner: '<!--\n<%= gruntScope.commentBanner %>-->\n',
			linebreak: true
		}
	});
};
