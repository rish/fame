var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('default', function() {
  bs.init({
    server: {
      baseDir: "./app",
      routes: {
        "/lib": "bower_components"
      }
    }
  });
});

