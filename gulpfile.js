var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('project',function(){
	return gulp.src('project/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('project/css'))
	});