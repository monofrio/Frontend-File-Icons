/**
 *
 * @type {Gulp|*|exports|module.exports}
 *
 * This file is used for when a new icomoon package has been added.
 * it moves and renames files so they can be used in a project.
 */

var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('default', ['moveFonts', 'rename']);

gulp.task('moveFonts', function(){
  gulp.src('./icomoon/fonts/*')
      .pipe(gulp.dest('./fonts'))
});

gulp.task('rename', function(){
  gulp.src('./icomoon/style.css')
  .pipe(rename("./mod-icons.scss"))
  .pipe(gulp.dest('./'));
});

