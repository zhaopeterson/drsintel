var gulp  =  require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass');


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
})