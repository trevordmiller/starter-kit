// -------------------------------------------------------------------------------
// GRUNT CONFIG: BROWSERSYNC
// grunt-browser-sync
// Creates a server, then live reloads and injects file changes into all instances of the server.
// http://www.browsersync.io/docs/grunt/
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
  'use strict';
  grunt.config('browserSync', {
    files: {
      src: [
        '<%= gruntScope.distHtmlFiles %>',
        '<%= gruntScope.distMainCssFile %>',
        '<%= gruntScope.srcJsFiles %>'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: 'dist/'
      }
    }
  });
};
