var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  browsersync = require('browser-sync'),
  concat = require('gulp-concat'),
  deploy = require('gulp-gh-pages'),
  include = require('gulp-include'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

var paths = {
  html: './source/views/*.html',
  scripts: './source/assets/javascripts/**/*.js',
  scss: './source/assets/stylesheets/**/*.scss',
  images: './source/assets/images/*',
  fonts: './source/assets/fonts/**/*'
};

//Move html files to build
gulp.task('views', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});


gulp.task('stylesheets', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/assets/stylesheets'));
});


// Scripts
gulp.task('javascripts', function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/assets/javascripts'));
});


// Copy images
gulp.task('images', function () {
  gulp.src(paths.images)
    .pipe(gulp.dest('./build/assets/images'));
});

// Copy fonts
gulp.task('fonts', function () {
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./build/assets/fonts'));
});

// Server
gulp.task('server', function() {
  browsersync({
    server: {
      baseDir: "./build",
    },
    port: 4000,
    notify: false,
    open: true
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.html, ['views']);
  gulp.watch(paths.scss, ['stylesheets']);
  gulp.watch(paths.scripts, ['javascripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch('./build/*.html', browsersync.reload);
  gulp.watch('./build/assets/stylesheets/*.css', browsersync.reload);
  gulp.watch('./build/assets/javascripts/*.js', browsersync.reload);
  gulp.watch('./build/assets/images/*', browsersync.reload);
  gulp.watch('./build/assets/fonts/*', browsersync.reload);
});

// Run
gulp.task('default', ['views', 'stylesheets', 'javascripts', 'images', 'fonts', 'server', 'watch'], function() {

});

// Deploy
gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy({
      branch: "gh-pages"
    }));
});
