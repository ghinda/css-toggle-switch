'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var yeomanConfig = {
		app: 'src',
		dist: './'
	};

	try {
		yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
	} catch (e) {}

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
		compass: {
			files: [ '<%= yeoman.app %>/{,*/}*.{scss,sass}' ],
			tasks: [ 'compass:server' ]
		},
		livereload: {
			options: {
				livereload: LIVERELOAD_PORT
			},
			files: [
				'./{,*/}*.html',
				'./{,*/}*.css'
			]
		}
		},
		connect: {
		options: {
			port: 9000,
			// Change this to '0.0.0.0' to access the server from outside.
			hostname: 'localhost'
		},
		livereload: {
			options: {
			middleware: function (connect) {
				return [
				lrSnippet,
				mountFolder(connect, './')
				];
			}
			}
		},
		dist: {
			options: {
				middleware: function (connect) {
					return [
					mountFolder(connect, yeomanConfig.dist)
					];
				}
			}
		}
		},
		open: {
			server: {
				url: 'http://localhost:<%= connect.options.port %>'
			}
		},
		compass: {
			options: {
				sassDir: '<%= yeoman.app %>',
				cssDir: './dist',
				noLineComments: true
			},
			dist: {},
			server: {
				options: {
					debugInfo: false
				}
			}
		},
		concurrent: {
			server: [
				'compass:server'
			],
			dist: [
				'compass:dist'
			]
		}
	});

	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'concurrent:server',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'concurrent:dist'
	]);

	grunt.registerTask('default', [
		'build'
	]);
};
