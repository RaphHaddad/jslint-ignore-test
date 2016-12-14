/*global require */
(function () {
    "use strict";
    var gulp = require("gulp"),
        debug = require("gulp-debug"),
        lint = require("gulp-jslint"),
        src = ["main.js", "gulpfile.js"];

    gulp.task("default", function () {
        gulp.src(src)
            .pipe(debug({title: "test"}))
            .pipe(lint({browser: true}))
            .pipe(lint.reporter("stylish"));
    });
}());