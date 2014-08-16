// -------------------------------------------------------------------------------
// GRUNT CONFIG: UGLIFY
// grunt-contrib-uglify
// Concatenates and minifies JavaScript files.
// https://github.com/gruntjs/grunt-contrib-uglify
// -------------------------------------------------------------------------------

module.exports = {

	// While watch is running, uglify JS completely to optimize file loading
	dist: {
		files: {
			'distMainJsFile': '<%= srcJsFiles %>'
		},
		options: {
			banner: '<%= commentBanner %>'
		}
	},

	// If 'grunt debug' is used, don't uglify JS completely - just concatenate
	debug: {
		files: {
			'distMainJsFile': '<%= srcJsFiles %>'
		},
		options: {
			mangle: false,
			beautify: true,
			compress: false,
			preserveComments: true,
			banner: '<%= commentBanner %>'
		}
	}
};
