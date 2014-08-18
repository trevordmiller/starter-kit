// ================================================================================
// GRUNTFILE
// Grunt build process.
// http://gruntjs.com
// ================================================================================

module.exports = function(grunt) {
	'use strict';



	// ------------------------------------------------------------------------------
	// PROJECT LEVEL: VARIABLES
	// Contains only variables shared across Grunt files.
	// ------------------------------------------------------------------------------

	var gruntScope = {

		// COMMENT BANNER
		// Placed on generated files to warn developers not to edit `dist` files directly.
		commentBanner: '/**\n * WARNING: Do not edit this file! It is generated automatically from multiple source files.\n * LAST GENERATED: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n */\n\n',

		// HTML FILES
		srcHtmlFiles: [
			'src/*.html'
		],
		distHtmlFiles: [
			'dist/*.html'
		],

		// SASS/CSS FILES
		srcSassFiles: [
			'src/main.scss',
			'src/components/**/*.scss'
		],
		srcMainSassFile: 'src/main.scss',
		distMainCssFile: 'dist/all.min.css',

		// JS FILES
		srcJsFiles: [
			'src/main.js',
			'src/components/**/*.js'
		],
		distMainJsFile: 'dist/all.min.js',
		gruntConfigJsFiles: [
			'Gruntfile.js',
			'grunt-configs/*.js'
		],
	};



	// ------------------------------------------------------------------------------
	// CONFIG
	// ------------------------------------------------------------------------------

	// INIT
	grunt.initConfig({
		pkg: require('./package.json'),

		// Pass shared variables to be used by external config files.
		gruntScope: gruntScope
	});

	// LOAD TASKS
	// Load tasks automatically with 'load-grunt-tasks' plugin.
	// https://github.com/sindresorhus/load-grunt-tasks
	require('load-grunt-tasks')(grunt);

	// TASK CONFIGS
	// Load per-task configs from seperate files.
	grunt.loadTasks('grunt-configs/');



	// ------------------------------------------------------------------------------
	// REGISTER TASKS
	// ------------------------------------------------------------------------------

	// DEFAULT
	// Runs all tasks
	// Run 'grunt'
	grunt.registerTask('default', [
		'clean',
		'htmlmin',
		'scsslint',
		'sass:dist',
		'autoprefixer',
		'jshint',
		'uglify:dist',
		'usebanner'
	]);

	// SERVE
	// Runs all tasks (default), then starts a server for live reloading.
	// Run 'grunt serve'
	grunt.registerTask('serve', [
		'default',
		'browserSync',
		'watch'
	]);

	// DEBUG
	// Runs `grunt serve`, but with prettified code for debugging.
	// Run 'grunt serve:debug'
	grunt.registerTask('serve:debug', [
		'browserSync',
		'watch'
	]);
};
