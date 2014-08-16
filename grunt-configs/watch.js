// -------------------------------------------------------------------------------
// GRUNT CONFIG: WATCH
// grunt-contrib-watch
// Continuously watches and live reloads with file changes.
// https://github.com/gruntjs/grunt-contrib-watch
// -------------------------------------------------------------------------------

module.exports = {
	html: {
		files: [
			'<%= srcHtmlFiles %>'
		],
		tasks: [
		]
	},
	sass: {
		files: [
			'<%= srcSassFiles %>'
		],
		tasks: [
			'scsslint',
			'sass:dist',
			'autoprefixer'
		]
	},
	js: {
		files: [
			'<%= srcJsFiles %>'
		],
		tasks: [
			'jshint', 'uglify:dist'
		]
	}
};
