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
        hostname: 'localhost',
        port: 9000,
        livereload: true,
        open: true,
      },
      livereload: {
        options: {
          base: [
            '<%= config.jekyll %>',
            '<%= config.temp %>',
            '<%= config.src %>',
            '.'
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
      js: {
        options: {
          livereload: true
        },
        files: [
          'Gruntfile.js',
          '<%= config.src %>/scripts/{,*/}*.js'
        ],
        tasks: ['jshint']
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
          '<%= config.temp %>/styles/{,*/}*.css',
          '<%= config.src %>/scripts/{,*/}*.js'
        ]
      },
    },


    // Copy assets around that aren't normally moved
    copy: {
      build: {
        files: [
          { expand: true, flatten: true, src: 'bower_components/font-awesome/fonts/*', dest: '<%= config.temp %>/fonts' }
        ]
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
    },

    // Check js files for issues
    jshint: {
      all: [
        'Gruntfile.js',
        '<%= config.src %>/scripts'
      ]
    },

    // Tasks which can run at the same time
    //
    concurrent: {
      build: [
        'jekyll:server',
        'sass:server',
        'copy:build'
      ]
    }
  });



  // Tasks
  // ---------------------------------------------------------------------------

  // Build
  //
  grunt.registerTask('build', [
    'clean:server',
    'concurrent:build',
  ]);

  // Serve
  //
  grunt.registerTask('serve', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  // Default
  //
  grunt.registerTask('default', [
    'build'
  ]);
};
