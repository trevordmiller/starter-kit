// -------------------------------------------------------------------------------
// GRUNT CONFIG: AUTOPREFIXER
// grunt-autoprefixer
// Automatically adds vendor prefixes for required browser support using the 'Can I Use' database.
// https://github.com/nDmitry/grunt-autoprefixer
// -------------------------------------------------------------------------------

module.exports = {
	dist: {
		src: [
			'<%= distMainCssFile %>'
		]
	},
	options: {

		// Portfolio level standard for browser support
		browsers: [
			'last 2 versions'
		]
	}
};
