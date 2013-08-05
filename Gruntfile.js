/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    uglify: {
      dist: {
        files: [
          {
            src: ['js/src/**/*.js'],
            dest: 'js/build/',
            flatten: true,
            expand: true
          }
        ]
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['js/src/**/*.js']
      }
    },
    compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint', 'uglify']
      },
      css_files: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify', 'compass']);

};
