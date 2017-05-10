const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const replace = require('gulp-replace-task');
const babel = require('gulp-babel');

gulp.task('styles:compile', () => gulp.src(`${__dirname}/src/styles/*.sass`)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(`${__dirname}/tmp`)));

gulp.task('styles:compress', ['styles:compile'], () => gulp.src([
  `${__dirname}/tmp/api-doc-generator.css`,
  `${__dirname}/node_modules/normalize.css/normalize.css`,
  `${__dirname}/node_modules/milligram/dist/milligram.css`,
])
  .pipe(concat('api-doc-generator.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest(`${__dirname}/dist`)));

gulp.task('scripts:compile', () => gulp.src(`${__dirname}/src/js/*.js`)
  .pipe(babel({
    presets: ['es2015'],
  }))
  .pipe(gulp.dest(`${__dirname}/tmp`)));

gulp.task('scripts:compress', ['scripts:compile'], () => gulp.src(`${__dirname}/tmp/api-doc-generator.js`)
  .pipe(minify({
    noSource: true,
    ext: {
      min: '.min.js',
    },
  }))
  .pipe(gulp.dest(`${__dirname}/dist`)));

gulp.task('demo', () => gulp.src(`${__dirname}/tmp/index.html`)
  .pipe(replace({
    patterns: [
      {
        match: /api-doc-generator.min/g,
        replacement: '../dist/api-doc-generator.min',
      },
    ],
  }))
  .pipe(gulp.dest(`${__dirname}/demo`)));

gulp.task('styles', ['styles:compile', 'styles:compress']);
gulp.task('scripts', ['scripts:compile', 'scripts:compress']);
gulp.task('dist', ['styles', 'scripts']);

gulp.task('clean', ['dist', 'demo'], () => gulp.src(`${__dirname}/tmp`, {
  read: false,
})
  .pipe(clean()));

gulp.task('default', ['dist', 'demo', 'clean']);
