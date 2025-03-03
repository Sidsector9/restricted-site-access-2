module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			js: {
				files: {
					'assets/js/settings.min.js': ['assets/js/src/settings.js'],
					'assets/js/admin.min.js': ['assets/js/src/admin.js'],
				}
			}
		},

		watch: {
			default: {
				files: [
					'assets/js/src/*'
				],
				tasks: ['uglify:js']
			},
			test: {
				files: [
					'tests/php/*.php',
				],
				tasks: ['phpunit'],
			}
		},

		phpunit: {
			classes: {
				dir: 'tests/php/*.php'
			},
			options: {
				bin: 'vendor/bin/phpunit',
				bootstrap: 'phpunit-bootstrap.php',
				colors: true
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-uglify-es' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-phpunit' );

	grunt.registerTask( 'default', ['uglify:js'] );
};
