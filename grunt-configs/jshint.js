// -------------------------------------------------------------------------------
// GRUNT CONFIG: JSHINT
// grunt-contrib-jshint
// Lints JS files based on options in the root level .jshintrc file.
// https://github.com/gruntjs/grunt-contrib-jshint
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
	'use strict';
	grunt.config('jshint', {
		src: [
			'<%= gruntScope.gruntScope.srcJsFiles %>',
			'<%= gruntScope.gruntScope.gruntConfigFiles %>'
		],
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		}
	});
};
