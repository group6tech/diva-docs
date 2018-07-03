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
      build: {
        files: [
          { expand: true, flatten: true, src: 'node_modules/font-awesome/fonts/*', dest: '<%= config.temp %>/fonts' }
        ]
      },
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
          ],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: '<%= config.temp %>',
          src: ['*.{ico,png}',],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: 'node_modules/font-awesome/fonts/',
          src: '*.*',
          dest: '<%= config.dist %>/fonts/'
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

    // Generate a favicon
    //
    favicons: {
      options: {
        trueColor: true,
        appleTouchBackgroundColor: '#0088cc',
        tileColor: '#0088cc',
        html: '<%= config.jekyll %>/index.html'
      },
      icons: {
        src: '<%= config.src %>/favicon.png',
        dest: '<%= config.temp %>/'
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

    // Deploy to github
    //
    'gh-pages': {
      options: {
        base: '<%= config.dist %>',
        clone: '.azure',
        //repo: 'git@github.com:group6tech/diva-help.git',
        repo: 'https://github.com/group6tech/diva-help.git',
        branch: 'azure'
      },
      src: ['**']
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
    'favicons'
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

  grunt.registerTask('publish', [
    'dist',
    'gh-pages'
  ]);

  // Default
  //
  grunt.registerTask('default', [
    'build'
  ]);
};
