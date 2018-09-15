var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
    	proxy: 'http://localhost:4000/',
    	//reloadDelay: 2000,
        /*server: {
            baseDir: 'app'
        },
        //notify: false*/
    });
});

gulp.task('watch', ['browser-sync'], function() {
    //gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('_site/*.html', browserSync.reload);
    gulp.watch(['_site/stylesheets/*.css', '_site/*.css'], browserSync.reload);
    //gulp.watch('_site/stylesheets/*.css', browserSync.reload({stream:true}));
});