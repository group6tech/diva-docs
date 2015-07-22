//
// Gruntfile
// =============================================================================

module.exports = function(grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);

  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project Configuration
  // ---------------------------------------------------------------------------

  var config = {
    src: 'app',
    dest: 'dist',
    temp: '.tmp'
  };

  // Tasks Configuration
  // ---------------------------------------------------------------------------

  grunt.initConfig({

    // Load the project config
    //
    config: config,

    // Clean up old files
    //
    clean: {
      server: [
        '<%= config.temp %>'
      ]
    },

    // Run a local server
    //
    connect: {
      options: {
        livereload: true,
        open: true,
      },
      livereload: {
        options: {
          base: ['<%= config.temp %>']
        }
      }
    },

    // Watch file for changes
    //
    watch: {
      options: {
        livereload: true
      },
      jekyll: {
        files: [
          '<%= config.src %>/**/*.{html,md}'
        ],
        tasks: ['jekyll:server']
      }
    },

    // Compile the Jekyll resources
    //
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        src: '<%= config.src %>'
      },
      server: {
        options: {
          dest: '<%= config.temp %>'
        }
      }
    }
  });



  // Tasks
  // ---------------------------------------------------------------------------

  // Build
  //
  grunt.registerTask('build', [
    'clean:server',
    'jekyll:server'
  ]);

  // Serve
  //
  grunt.registerTask('serve', [
    'build',
    'connect:livereload',
    'watch'
  ])

  // Default
  //
  grunt.registerTask('default', [
    'build'
  ]);
};
