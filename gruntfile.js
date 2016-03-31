
module.exports = function(grunt){

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// JSHINT
		jshint:{
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$:true
				},
			},
			all:['src/js/main.js']
		},

		// uglify
		uglify:{
			my_files: {
				options:{
					sourceMap:true,
					sourceMapName: "dist/js/file.min.map",
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
								'<%= pkg.author %> '+
								'<%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files:{
					'dist/js/file.min.js': ["src/js/main.js"]
				}
			}
		},

		// WATCH
		watch: {
			options: {
				livereload:true
			},
			js:{
				files: "src/js/main.js",
				"tasks":"js"
			}
		}


	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//  Tasks
	grunt.registerTask("js",["jshint::all", "uglify"]);
	
}