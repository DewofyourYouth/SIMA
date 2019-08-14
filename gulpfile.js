const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const njr = require('gulp-nunjucks-render');
const data = require('gulp-data');

 function nunjucks(){
    return gulp.src('./pages/**/*.+(html|njk)')
    .pipe(data(function(){
        return require('./data.json')
    }))
    .pipe(njr({
        path: ['templates']
    }))
    .pipe(gulp.dest('./'))
}

function style() {
    // 1. where is my scss file?
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where to save compiled css?
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    // 1. Initialize browserSync
    browserSync.init({
        server: {
            // 2. Identify where the root directory of the server is
            baseDir: './'
        }
    });

    //  Arguments: 
    //      1) path: where to look for changes, 
    //      2) callback: which Gulp functions to run
    gulp.watch('./pages/**/*.njk', nunjucks);
    gulp.watch('./templates/**/*.njk', nunjucks);
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;