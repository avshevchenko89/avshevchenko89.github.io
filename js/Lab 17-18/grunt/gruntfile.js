module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/script.min.js'
            }
        },
        uglify: {
            dist: {
                src: 'dist/script.min.js',
                dest: 'dist/script.min.js'
            }
        },
        cssmin: { //описываем работу плагина минификации и конкатенации css.
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'  //комментарий который будет в output файле.
                },

                files: {
                    'dist/style.min.css' : ['src/css/*.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },
        watch: { //описываем работу плагина слежки за файлами.
            scripts: {
                files: ['src/js/*.js'],  //следить за всеми js файлами в папке src
                tasks: ['concat', 'uglify']  //при их изменении запускать следующие задачи
            },
            css: {
                files: ['src/css/*.css'], //следить за всеми css файлами в папке src
                tasks: ['cssmin'] //при их изменении запускать следующую задачу
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','uglify', 'cssmin', 'watch']);

};
