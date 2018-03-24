// yarn

var transformer = require('jstransformer')
var markdown = transformer(require('jstransformer-marked'))


var gulp = require('gulp')
var less = require('gulp-less')
var LessAutoprefix = require('less-plugin-autoprefix')
var autoprefix = new LessAutoprefix( { browsers: ['last 2 versions'] } )
var debug = require('gulp-debug')

var ts = require('gulp-typescript')
var pug  = require('gulp-pug')
var rename = require('gulp-rename')
gulp.task('default', defaultTask)
function defaultTask(done) {
	gulp.start('css', 'html', 'js')
	done()
}

//
gulp.task('watch', function(done) {
	gulp.start('css', 'html', 'js')
	gulp.watch('./www/**/*.pug', [ 'css', 'html', 'js'])
	done()
})
//

gulp.task('css', function () {
	return gulp.src('./www/assets/fr7/framework7.less')
		.pipe( less(
				{ plugins: [autoprefix] }
			))
		.pipe(gulp.dest('./www/assets/fr7/'))
	})

gulp.task('html', function() {  
	return gulp.src('./www/**/*.pug')
		.pipe( pug(
			{ pretty: true 
			,basedir: './www/'
			}
		)) // pipe to pug plugin
		.pipe(gulp.dest('./www/'))
	})


gulp.task('js', function () {
	return gulp.src('./www/**/*.ts')
		.pipe( ts(
			{ }
		))
		.pipe(gulp.dest('./www/'))
	})