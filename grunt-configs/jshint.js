// -------------------------------------------------------------------------------
// GRUNT CONFIG: JSHINT
// grunt-contrib-jshint
// Lints JS files based on options in the root level .jshintrc file.
// https://github.com/gruntjs/grunt-contrib-jshint
// -------------------------------------------------------------------------------

module.exports = {
	src: [
		'<%= srcJsFiles %>',
		'<%= gruntConfigFiles %>'
	],
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	}
};
