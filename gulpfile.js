/**
 *
 * @type {Gulp|*|exports|module.exports}
 *
 * This file is used for when a new icomoon package has been added.
 * it moves and renames files so they can be used in a project.
 */

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('default', ['rename', 'rename2'] );

/** Rename the css file to a scss file type to use in SASS styles */
gulp.task('rename', function(){
  gulp.src('./icomoon/style.css')
    .pipe(rename("./scss/frontend-file-icons.scss"))
    .pipe(gulp.dest('./'));
});
/** Rename font files to frontend-file-icons */
gulp.task('rename2', function(){

  gulp.src('./fonts/frontend-file-icons.eot')
    .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.svg')
      .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.woff')
      .pipe(clean());

  gulp.src('./fonts/frontend-file-icons.ttf')
      .pipe(clean());

  /** ---------------------------------------- */

  gulp.src('./icomoon/fonts/icomoon.eot')
      .pipe(rename("frontend-file-icons.eot"))
      .pipe(gulp.dest('./fonts/'));

  gulp.src('./icomoon/fonts/icomoon.svg')
      .pipe(rename("frontend-file-icons.svg"))
      .pipe(gulp.dest('./fonts/'));

  gulp.src('./icomoon/fonts/icomoon.ttf')
      .pipe(rename("frontend-file-icons.ttf"))
      .pipe(gulp.dest('./fonts/'));

  gulp.src('./icomoon/fonts/icomoon.woff')
      .pipe(rename("frontend-file-icons.woff"))
      .pipe(gulp.dest('./fonts/'));

});

