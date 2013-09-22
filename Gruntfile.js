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
		dist: 'dist'
	};

	try {
		yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
	} catch (e) {}

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
			sass: {
				files: [ '<%= yeoman.app %>/{,*/}*.{scss,sass}' ],
				tasks: [ 'sass:server' ]
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'./{,*/}*.html',
					'./**/*.css'
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
							mountFolder(connect, './')
						];
					}
				}
			}
		},
		sass: {
			dist: {
				files: {
					'<%= yeoman.dist %>/toggle-switch.css': '<%= yeoman.app %>/toggle-switch.scss',
					'<%= yeoman.dist %>/docs/docs.css': '<%= yeoman.app %>/docs/docs.scss',
					'<%= yeoman.dist %>/docs/foundation.css': 'bower_components/foundation/scss/foundation.scss'
				}
			},
			server: {
				options: {
					includePaths: [
						''
					]
				},
				files: {
					'<%= yeoman.dist %>/toggle-switch.css': '<%= yeoman.app %>/toggle-switch.scss',
					'<%= yeoman.dist %>/docs/docs.css': '<%= yeoman.app %>/docs/docs.scss',
					'<%= yeoman.dist %>/docs/foundation.css': 'bower_components/foundation/scss/foundation.scss'
				}
			}
		},
		concurrent: {
			server: [
				'sass:server'
			],
			dist: [
				'sass:dist'
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
