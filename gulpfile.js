var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var pug = require('gulp-pug');
var livereload = require('gulp-livereload');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var babel = require('gulp-babel');


gulp.task('default', ['js', 'css', 'pug', 'img', 'html','other', 'watch']);

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/sass/*.sass', ['css']);
    gulp.watch('src/img/*.*', ['img']);
    gulp.watch('src/page/*.md', ['other']);
});

gulp.task('pug', function(){
  return gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('public/'))
        .pipe(livereload({ start: true }))
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
				.pipe(concat('app.min.js'))
        .pipe(babel({ presets: ['env']}))
				.pipe(uglify())
				.pipe(gulp.dest('public/js'))
});

gulp.task('css', function () {
  var processors = [autoprefixer({browsers: ['last 5 version']})];
  return gulp.src('src/sass/*.sass')
        .pipe(sass(({outputStyle: 'compressed'})))
        .pipe(postcss(processors))
        .on('error', swallowError)
        .pipe(gulp.dest('public/css'))
        .pipe(livereload({ start: true }))
});

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/'))
        .pipe(livereload({ start: true }))
});

gulp.task('img', function(){
  gulp.src('src/**/*.png')
        .pipe(gulp.dest('public/'))
  gulp.src('src/**/*.jpg')
        .pipe(gulp.dest('public/'))
  gulp.src('src/**/*.svg')
        .pipe(gulp.dest('public/'))
});

gulp.task('other', function(){
  gulp.src('src/file/*.zip')
        .pipe(gulp.dest('public/file'))
  gulp.src('src/page/*.md')
        .pipe(gulp.dest('public/page'))
});

function swallowError(error) {
  console.error(error.toString())
  this.emit('end')
}
