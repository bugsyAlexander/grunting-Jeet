module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/main.js': ['components/js/*.js', 'components/js/vendor/*.js']
        } // files
      } // my_target
    }, // uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      } // dev
    }, // compass
    watch: {
      script: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      }, // script
      sass: {
        files: ['components/sass/*.scss'],
        tasks: ['compass:dev']
      } // sass
    }, // watch
    uncss: {
      dist: {
        files: {
          'css/style.css' : ['index.html']
        }
      } // dist
    } // uncss
  }); // initConfig
  grunt.registerTask('default', ['watch', 'uncss']);
}; // exports