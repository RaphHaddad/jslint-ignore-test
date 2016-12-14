var gulp = require('gulp'),
debug = require('gulp-debug'),
lint = require('gulp-jslint'),
src = ['main.js'];

gulp.task('default', function () {
    gulp.src(src)
    .pipe(debug({title: 'test'}))
    .pipe(lint())
    .pipe(lint.reporter('stylish'))
});