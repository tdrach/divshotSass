module.exports = function(grunt) {
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'client/style.css' : 'sass/app.scss'
                }
            }
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['js/**/*.js'],
              dest: 'client/build.js',
            },
        },
        uglify: {
             options: {
                mangle: false
              },
            build: {
                src: ['js/**/*.js'],
                dest: 'client/build.min.js'
            }
        },
        cssmin: {
          css: {
            src: ['client/style.css'],
            dest: 'client/style.min.css'
          }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss', 'js/**/*.js'],
                tasks: ['sass', 'concat', 'uglify', 'cssmin'],
                options: {
                    livereload: true,
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
};