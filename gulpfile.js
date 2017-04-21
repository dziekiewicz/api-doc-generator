'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');

gulp.task('sass', function () {
  return gulp.src('./src/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('concat', ['sass'], function() {
  return gulp.src([
      __dirname + '/tmp/api-doc-generator.css',
      __dirname + '/node_modules/normalize.css/normalize.css',
      __dirname + '/node_modules/milligram/dist/milligram.css'
    ])
    .pipe(concat('api-doc-generator.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', ['concat'], function () {
  return gulp.src('./tmp', {read: false})
    .pipe(clean());
});

gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify({
      noSource: true,
      ext:{
        min:'.min.js'
      },
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('styles', ['sass', 'concat', 'clean']);
gulp.task('js', ['compress']);

gulp.task('default', ['styles', 'js']);