var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['*.html', '*.css']).on('change', reload);
});


gulp.task('default', ['browser-sync']);