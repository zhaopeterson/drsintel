var gulp  =  require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');


var sassFiles = ['app/sass/drcstyle.scss']

gulp.task('log', function(){
	gutil.log('workflow is good')
})

gulp.task('compass', function(){
	gulp.src(sassFiles)
	.pipe(compass({
		sass: 'app/sass',
		images: 'app/images',
		style: 'expanded'
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest('app/css'))
	.pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src('app/*.html')
    // .pipe(gulpif(env === 'production', minifyHTML()))
    // .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch('app/sass/*.scss', ['compass']);
	gulp.watch('app/*.html', ['html']);
});
gulp.task('connect', function(){
	connect.server({
		root: 'app/',
		livereload:true
	})
})




gulp.task('default', ['compass', 'connect','watch'])