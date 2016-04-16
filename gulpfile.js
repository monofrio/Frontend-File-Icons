var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('default', ['rename'], function(){});

gulp.task('rename', function(){
  gulp.src('./style.css')
  .pipe(rename("./mod-icons.scss"))
  .pipe(gulp.dest('./'));
});

gulp.task('scss', function(){
  gulp.src('./*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});
