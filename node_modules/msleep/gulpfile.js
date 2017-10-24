var gulp = require('gulp')
var mocha = require('gulp-mocha')
var uglify = require('gulp-uglify')
var header = require('gulp-header')
var rename = require('gulp-rename')

// Test
// ----

gulp.task('test', function () {
  gulp.src('test/*.js')
    .pipe(mocha())
})

// Build
// -----

var pkg = require('./package.json')
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' *',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @author <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('build', function() {
  gulp.src('src/index.js')
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(rename('msleep.min.js'))
    .pipe(gulp.dest('dist'))
})
