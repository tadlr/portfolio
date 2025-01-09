import gulp from 'gulp';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import sassGlob from 'gulp-sass-glob';
import cssimport from 'gulp-cssimport';

const { dest, series, parallel } = gulp;

const sass = gulpSass(sassCompiler);

// File paths
const paths = {
  scss: {
    src: ['./scss/**/*.scss'],
    dest: './src/css/',
  },
};

const postCssPlugins = [
  autoprefixer({
    remove: true,
    grid: false,
    flexbox: true,
    supports: true,
    overrideBrowserslist: ['> 0.5%, last 2 versions'],
  }),
  cssnano(),
];

const includePaths = ['./node_modules/', './scss/'];

const importOptions = {
  matchPattern: '*.css',
};

function scssTask($glob) {
  const compiledStream = gulp
    .src($glob.src)
    .pipe(sourcemaps.init())

    .pipe(sassGlob())
    .pipe(cssimport(importOptions))
    .pipe(sass({ includePaths }).on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(sourcemaps.write('.'))

    .pipe(dest($glob.dest));

  return compiledStream;
}

const scssGlob = paths.scss;

function watchTask() {
  gulp.watch(scssGlob.src, compileGeneralSCSS);
}

function compileGeneralSCSS() {
  return scssTask(scssGlob);
}
compileGeneralSCSS.displayName = 'General SCSS';
export const watch = series(parallel(compileGeneralSCSS), watchTask);

export const production = series(parallel(compileGeneralSCSS));
export const build = series(parallel(compileGeneralSCSS));

export const prod = production;
