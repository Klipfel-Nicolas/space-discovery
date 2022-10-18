const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
/* const purgecss = require('gulp-purgecss') */

function buildStyles() {
    return src('src/styles/index.scss')
    .pipe(sass())
    /* .pipe(purgecss({ content: ['src/views/*.html']})) */ // Because class add in javascript not read and compile
    .pipe(dest('css'))
};

function watchTask() {
    watch(['src/styles/**/*.scss', 'src/views/*.html'], buildStyles) // watch this files for rebuild the css
}

exports.default = series(buildStyles, watchTask)