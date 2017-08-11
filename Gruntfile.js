'use strict';
var LIVERELOAD_PORT = 35729;

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      sass: {
        files: [ '{src,site}/{,*/}*.scss' ],
        tasks: [ 'sass:server' ]
      },
      assemble: {
        files: [ 'site/{,*/}*.{hbs,html}' ],
        tasks: [ 'assemble' ]
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          './build/*.html',
          './build/{,*/}*.css',
          './dist/*.css'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          livereload: true,
          base: [
            './build/',
            './site/',
            './'
          ]
        }
      },
      dist: {
        options: {
          base: [
            './build/'
          ]
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      server: {
        files: {
          'dist/toggle-switch.css': 'src/toggle-switch.scss',
          'dist/toggle-switch-rem.css': 'src/toggle-switch-rem.scss',
          'dist/toggle-switch-px.css': 'src/toggle-switch-px.scss',
          'build/css/docs.css': 'site/css/docs.scss'
        }
      }
    },
    'saucelabs-qunit': {
      all: {
        options: {
          urls: [ 'http://127.0.0.1:9000/test' ],
          detailedError: true,
          browsers: [
            {
              browserName: 'chrome',
              platform: 'Linux'
            }, {
              browserName: 'firefox',
              platform: 'Linux'
            }, {
              browserName: 'android',
              platform: 'Linux',
              version: '5.1'
            }, {
              browserName: 'internet explorer',
              platform: 'Windows 7',
              version: '9'
            }, {
              browserName: 'internet explorer',
              platform: 'Windows 8',
              version: '10'
            }, {
              browserName: 'internet explorer',
              platform: 'Windows 10',
              version: '11'
            }, {
              browserName: 'safari',
              platform: 'OS X 10.10',
              version: '8'
            }, {
              browserName: 'iphone',
              platform: 'OS X 10.10',
              version: '9.2'
            }
          ]
        }
      }
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://127.0.0.1:9000/test'
          ]
        }
      }
    },
    assemble: {
      options: {
        layoutdir: 'site/layouts',
        partials: 'site/partials/*.html'
      },
      site: {
        files: [{
          expand: true,
          cwd: 'site',
          src: '{,*/}*.hbs',
          dest: 'build'
        }]
      }
    },
    clean: {
      site: {
        src: [
          'build/',
          'dist/'
        ]
      }
    },
    copy: {
      site: {
        files: [
          {
            src: [
              'bower_components/**',
              'test/**',
              'dist/**'
            ],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'site/',
            dot: true,
            src: [
              'images/**',
              '.nojekyll'
            ],
            dest: 'build/'
          }
        ]
      }
    },
    buildcontrol: {
      options: {
        dir: 'build',
        commit: true,
        push: true
      },
      site: {
        options: {
          remote: 'git@github.com:ghinda/css-toggle-switch.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean',
      'assemble',
      'sass',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'build',
    'connect:dist',
    'saucelabs-qunit'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'sass',
    'copy'
  ]);

  grunt.registerTask('deploy', [
    'test',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
