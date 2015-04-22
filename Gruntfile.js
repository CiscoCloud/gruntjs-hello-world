// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'helloworld.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default', ['nodemon']);  
};
