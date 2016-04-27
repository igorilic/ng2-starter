var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

gulp.task('styles', function () {
    return gulp
        .src(config.sass, {base: '.'})
        .pipe($.plumber())
        .pipe($.sass())
        .pipe(gulp.dest('.'));
});