// yarn

//var transformer = require('jstransformer')
//var markdown = transformer(require('jstransformer-marked'))


var gulp = require('gulp')
var less = require('gulp-less')
var LessAutoprefix = require('less-plugin-autoprefix')
var autoprefix = new LessAutoprefix( { browsers: ['last 2 versions'] } )
var debug = require('gulp-debug')

var ts = require('gulp-typescript')
var rename = require('gulp-rename')
gulp.task('default', defaultTask)
function defaultTask(done) {
	gulp.start('css', 'js')
	done()
}


gulp.task('css', function () {
	return gulp.src('./www/assets/fr7/framework7.less')
		.pipe( less(
				{ plugins: [autoprefix] }
			))
		.pipe(gulp.dest('./www/assets/fr7/'))
	})


gulp.task('js', function () {
	return gulp.src('./www/**/*.ts')
		.pipe( ts(
			{ }
		))
		.pipe(gulp.dest('./www/'))
	})