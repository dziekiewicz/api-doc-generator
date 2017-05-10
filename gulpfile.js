'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src(__dirname + '/src/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/tmp'));
});

gulp.task('concat', ['sass'], function() {
  return gulp.src([
      __dirname + '/tmp/api-doc-generator.css',
      __dirname + '/node_modules/normalize.css/normalize.css',
      __dirname + '/node_modules/milligram/dist/milligram.css'
    ])
    .pipe(concat('api-doc-generator.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('es6', () => {
  return gulp.src(__dirname + '/src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(__dirname + '/tmp'));
});

gulp.task('compress', ['es6'], function() {
  gulp.src(__dirname + '/tmp/*.js')
    .pipe(minify({
      noSource: true,
      ext:{
        min:'.min.js'
      },
    }))
    .pipe(gulp.dest(__dirname + '/dist'))
});

gulp.task('clean', ['js', 'styles'], function () {
  return gulp.src(__dirname + '/tmp', {read: false})
    .pipe(clean());
});

gulp.task('styles', ['sass', 'concat']);
gulp.task('js', ['es6', 'compress']);
gulp.task('default', ['styles', 'js', 'clean']);
