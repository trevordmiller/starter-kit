// -------------------------------------------------------------------------------
// GRUNT CONFIG: BROWSERSYNC
// grunt-browser-sync
// Creates a server, then live reloads and injects file changes into all instances of the server.
// http://www.browsersync.io/docs/grunt/
// -------------------------------------------------------------------------------

module.exports = function(grunt) {
  'use strict';
  grunt.config('browsersync', {
    files: {
      src: [
        '<%= gruntScope.distMainCssFile %>',
        '<%= gruntScope.distHtmlFiles %>'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: '<%= gruntScope.distPath %>'
      }
    }
  });
};
