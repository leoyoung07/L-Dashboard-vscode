'use strict';
import gulp from "gulp";
import fs from "fs";
import browserify from "browserify";
import vueify from "vueify";
import sourcemaps from "gulp-sourcemaps";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import gutil from "gulp-util";
import uglify from "gulp-uglify";
import babelify from "babelify";
import browserSync from "browser-sync";

const reload = browserSync.reload;

// apply custom config
vueify.compiler.applyConfig({
  // ...same as in vue.config.js
});

gulp.task('default', () => {
  browserSync({server: './out/view/'});
  gulp.watch('./src/view/**/*.*', gulp.series(['build-view']));
});

gulp.task('build-view', () => {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/view/index.js',
    debug: true
  });

  return b.transform("babelify", { presets: ["es2015"] })
    .transform('vueify')
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // Add transformation tasks to the pipeline here.
    // .pipe(uglify())
    // .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./out/view/'))
    .pipe(reload({stream: true}));
});
