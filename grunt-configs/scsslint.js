// -------------------------------------------------------------------------------
// GRUNT CONFIG: SASSLINT
// grunt-scss-lint
// Lints Sass files based on options in the root level .scss-lint.yml file.
// https://github.com/ahmednuaman/grunt-scss-lint
// -------------------------------------------------------------------------------

module.exports = {
	files: [
	'<%= srcSassFiles %>'
	],
	options: {
		config: '.scss-lint.yml'
	}
};
