var gulp  =  require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	gulpif = require('gulp-if'),
	minifyHTML = require('gulp-minify-html'),
	imagemin = require('gulp-imagemin'),
	pngcrush = require('imagemin-pngcrush');

var env,
	sassFiles,
	sassStyle,
	outputDir;

// Manually setting environment as has trouble to set process.env.NODE_ENV 
env = 'production',
//env = 'development',
sassFiles = ['./app/sass/drcstyle.scss'];

if (env === 'development') {
	outputDir = './app/';
	sassStyle = "expanded"
} else {
	outputDir = './dist/';
	sassStyle = "compressed"
}

gulp.task('log', function(){
	gutil.log('initially setting up the gulpfile ...',env, "env", " outputDir+'css' is", outputDir+'css', "sassStyle is: ", sassStyle)
})

gulp.task('compass', function(){
	gulp.src(sassFiles)
	.pipe(compass({
		config_file: './app/config.rb',
		css: outputDir + 'css',
		sass: './app/sass',
		images: './app/images',
		style: sassStyle
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest(outputDir+'css'))
	.pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload())
});

gulp.task('images', function() {
  gulp.src('./app/images/**/*.*')
    .pipe(gulpif(env === 'production', imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: true }],
      use: [pngcrush()]
    })))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
    .pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch('./app/sass/*.scss', ['compass']);
	gulp.watch('./app/*.html', ['html']);
});
gulp.task('connect', function(){
	connect.server({
		root: './app/',
		livereload:true
	})
})

gulp.task('default', ['compass','images','html','log','connect','watch'])