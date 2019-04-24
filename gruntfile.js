module.exports = function (grunt) {

    grunt.initConfig({
        purifycss: {
          options: {},
          target: {
            src: ['./index.html','./about.html','./contact.html','./events.html','./register.html','./sponsors.html', './js/script.js'],
            css: ['./css/main.css','./css/landing.css'],
            dest: './dist/css/main.css'
          },
        },
        cssmin: {
            target: {
              files: [{
                './dist/css/main.min.css':['./css/main.css','./css/landing.css']
              }]
            }
          }
      });

    // Load the plugins
    grunt.loadNpmTasks('grunt-purifycss')
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['purifycss', 'cssmin']);

};