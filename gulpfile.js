var gulp = require('gulp');
var bs = require('browser-sync').create();
var reload = bs.reload;

gulp.task('default', function() {
  bs.init({
    server: {
      baseDir: "./app",
      routes: {
        "/lib": "bower_components"
      }
    }
  });

  gulp.watch("app/**/*.html").on('change', reload);
  gulp.watch("app/scripts/**/*.js").on('change', reload);
});

