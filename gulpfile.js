var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function(){
  gulp.src('./*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});
