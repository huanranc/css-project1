var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require("gulp-htmlhint");
var gulpStylelint = require('gulp-stylelint');

gulp.task('project',function(){
	return gulp.src('project/sass/style.scss')
	    .on('error',sass.logError)
		.pipe(sass())
		.pipe(gulp.dest('project/css'))
	});

gulp.task('html',function(){
	return gulp.src("./project/*.html")
		.pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
})

gulp.task('lint-css', function lintCssTask() {

  return gulp
    .src('./project/css/style.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
