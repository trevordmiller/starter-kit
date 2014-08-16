// -------------------------------------------------------------------------------
// GRUNT CONFIG: BROWSERSYNC
// grunt-browser-sync
// Creates a server, then live reloads and injects file changes into all instances of the server
// http://www.browsersync.io/docs/grunt/
// -------------------------------------------------------------------------------

module.exports = {
  bsFiles: {
    src: [
      '<%= distMainCssFile %>',
      '<%= distHtmlFiles %>'
    ]
  },
  options: {
    watchTask: true,
    server: {
      baseDir: '<%= distPath %>'
    }
  }
};
