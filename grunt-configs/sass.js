// -------------------------------------------------------------------------------
// GRUNT CONFIG: SASS
// grunt-contrib-sass
// Compiles Sass to CSS.
// https://github.com/gruntjs/grunt-contrib-sass
// -------------------------------------------------------------------------------

module.exports = {

	// While watch is running, compress CSS completely to optimize file loading
	dist: {
		files: {
			'<%= distMainCssFile %>': '<%= srcMainSassFile %>'
		},
		options: {
			banner: '<%= commentBanner %>',
			require: 'sass-globbing',
			style: 'compressed'
		}
	},

	// If 'grunt debug' is used, don't compress CSS
	debug: {
		files: {
			'<%= distMainCssFile %>': '<%= srcMainSassFile %>'
		},
		options: {
			banner: '<%= commentBanner %>',
			require: 'sass-globbing',
			style: 'expanded',
			lineNumbers: true
		}
	}
};
