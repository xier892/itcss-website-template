const gulp = require('gulp');
// const rename = require('gulp-rename');

const concat = require('gulp-concat');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');

gulp.task('js', function() {
  return gulp.src([
    'js/*/*.js'])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {
  return gulp.src([
    'assets/css/*/*.css'])
    .pipe(concatCss('main.css'))
    // .pipe(gulp.dest('dist'))
    // .pipe(rename('main.min.css'))
    .pipe(uglifycss({
      uglyComments: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('css'));
