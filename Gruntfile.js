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
    jekyll: '.jekyll',
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
          base: [
            '<%= config.jekyll %>',
            '<%= config.temp %>'
          ]
        }
      }
    },

    // Watch file for changes
    //
    watch: {
      jekyll: {
        files: ['<%= config.src %>/**/*.{html,md}', '<%= config.src %>/*.yml'],
        tasks: ['jekyll:server']
      },
      sass: {
        files: ['<%= config.src %>/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= config.jekyll %>/{,*/}*.html',
          '<%= config.temp %>/styles/{,*/}*.css'
        ]
      },
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
          dest: '<%= config.jekyll %>'
        }
      }
    },

    // Compile the Sass stylesheets
    //
    sass: {
      options: {
        loadPath: ['bower_components']
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/styles',
          src: '*.scss',
          dest: '<%= config.temp %>/styles',
          ext: '.css'
        }]
      }
    }
  });



  // Tasks
  // ---------------------------------------------------------------------------

  // Build
  //
  grunt.registerTask('build', [
    'clean:server',
    'jekyll:server',
    'sass:server'
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
