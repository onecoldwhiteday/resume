var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    port: 3107,
    host: '192.168.0.102',
    open: true,
    livereload: true,
  });
});

gulp.task('default', ['connect']);