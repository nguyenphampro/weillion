module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'src/vendors/pace.min.js',
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/popper.js/dist/umd/popper.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				// Phần Plugins
				'bower_components/owl.carousel/dist/owl.carousel.min.js',
				// 'bower_components/particles.js/particles.min.js',
				'bower_components/typed.js/dist/typed.umd.js',
				'src/vendors/modernizr.js',
				'src/vendors/odometer.js',
				'src/vendors/smoothscroll.js',
				'src/vendors/jquery.marquee.min.js',
				'src/vendors/jquery.fancybox.min.js',
				'src/vendors/jquery.background-video.js',
				'src/vendors/plyr.polyfilled.js',
				// 'src/vendors/video.min.js',
				// 'src/vendors/videojs-http-streaming.min.js',
				// 'src/vendors/particle.js',
			])
			.pipe($.concat('weilion.js'))
			.pipe(gulp.dest('./dist/js'));
	});
};
