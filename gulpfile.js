const gulp = require('gulp');
const rename = require('gulp-rename');

const concat = require('gulp-concat');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');

// gulp.task('js', function() {
//   return gulp.src([
//     'js/data/*.js',
//     'js/src/*.js',
//     'js/templates/*super.js',
//     'js/templates/*.js',
//     'js/event/*.js',
//     'js/event/main.js'])
//     .pipe(concat('index.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/'));
// });

gulp.task('css', function() {
  return gulp.src([
    'assets/css/01-settings/*.css',
    'assets/css/02-generic/*.css',
    'assets/css/03-elements/*.css',
    'assets/css/04-objects/*.css',
    'assets/css/05-components/*.css',
    'assets/css/06-trumps/*.css'])
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('main.min.css'))
    .pipe(uglifycss({
      uglyComments: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('css'));
