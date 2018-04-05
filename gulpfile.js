var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('default', ['move','rename']);

gulp.task('move', function(){
  gulp.src('./icomoon/fonts/*')
      .pipe(gulp.dest('./fonts'))
});

gulp.task('rename', function(){
  gulp.src('./icomoon/style.css')
  .pipe(rename("./mod-icons.scss"))
  .pipe(gulp.dest('./'));
});

