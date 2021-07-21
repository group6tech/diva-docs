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
    dist: 'dist',
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
      server: ['<%= config.temp %>'],
      dist: ['<%= config.dist %>']
    },

    // Run a local server
    //
    browserSync: {
      serve: {
        bsFiles: {
          src: [
            '<%= config.jekyll %>/**/*.html',
            '<%= config.temp %>/styles/**/*.css',
            '<%= config.src %>/images/**/*.{jpg,png,svg}',
            '<%= config.src %>/scripts/**/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: [
              '<%= config.jekyll %>',
              '<%= config.temp %>',
              '<%= config.src %>'
            ],
            routes: {
              '/node_modules': './node_modules'
            }
          }
        }
      },
      dist: {
        options: {
          server: '<%= config.dist %>'
        }
      }
    },

    // Watch file for changes
    //
    watch: {
      options: {
        spawn: false
      },
      jekyll: {
        files: ['<%= config.src %>/**/*.{html,md}', '<%= config.src %>/*.yml'],
        tasks: ['jekyll:server']
      },
      sass: {
        files: ['<%= config.src %>/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      }
    },

    // Copy assets around that aren't normally moved
    //
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.jekyll %>',
          src: [
            'sitemap.xml',
          ],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: '<%= config.src %>',
          src: [
            '*.{ico,json,txt,xml}',
            'CNAME'
          ],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: '<%= config.src %>',
          src: ['**/*.gif'],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: '<%= config.temp %>',
          src: ['*.{ico,png}',],
          dest: '<%= config.dist %>'
        }]
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
        loadPath: ['node_modules']
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

    // Prepare the usemin tasks
    //
    useminPrepare: {
      html: '<%= config.jekyll %>/index.html',
      options: {
        root: '../',
        dest: '<%= config.dist %>'
      }
    },

    // Uglify JS files
    //
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '<%= config.dist %>/js/reamaze.js': '<%= config.src %>/js/reamaze.js'
        }
      }
    },

    // Apply the minified links
    //
    usemin: {
      html: '<%= config.jekyll %>/**/*.html',
      dest: '<%= config.dist %>'
    },

    // Minify the HTML
    //
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.jekyll %>',
          src: '**/*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // Minify PNGs and JPGs
    //
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/',
          src: ['**/*.{png,jpg}'],
          dest: '<%= config.dist %>/'
        }]
      }
    },

    // Minify SVGs
    //
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/',
          src: ['**/*.svg'],
          dest: '<%= config.dist %>/'
        }]
      }
    },

    // Tasks which can run at the same time
    //
    concurrent: {
      build: [
        'jekyll:server',
        'sass:server'
      ]
    },

    // Github pages
    //
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });



  // Tasks
  // ---------------------------------------------------------------------------

  // Build
  //
  grunt.registerTask('build', [
    'clean:server',
    'concurrent:build'
  ]);

  // Serve
  //
  grunt.registerTask('serve', 'start the server and preview your app', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['dist', 'browserSync:dist']);
    }

    grunt.task.run([
      'build',
      'browserSync:serve',
      'watch'
    ]);
  });

  // Dist
  grunt.registerTask('dist', [
    'clean:dist',
    'build',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'htmlmin',
    'imagemin',
    'svgmin',
    'copy:dist'
  ]);

  // Deploy
  grunt.registerTask('deploy', [
    'dist',
    'gh-pages'
  ]);

  // Default
  //
  grunt.registerTask('default', [
    'build'
  ]);
};
