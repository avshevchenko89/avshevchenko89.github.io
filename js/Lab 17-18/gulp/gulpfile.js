'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var path = {
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        style: 'dist/css/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/css/*.css'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.css'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "Frontend_Gulp"
};

gulp.task('pages', function () {
    return gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку dist
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('scripts', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(concat('script.min.js')) //Склеиваем js
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в dist
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('styles', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(concatCss('style.min.css')) //Склеиваем css
        .pipe(cleanCSS()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.style)) //И в dist
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('pages');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('styles');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('scripts');
    });
});

gulp.task('build', [
    'pages',
    'scripts',
    'styles'
]);

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);
