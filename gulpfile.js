var gulp = require('gulp');
var livereload = require('gulp-livereload');
var exec = require('sync-exec');
var http = require('http');
var express = require('express');
var ecstatic = require('ecstatic');
var connect_livereload = require('connect-livereload')

var paths = ['_sass/*.scss', 'css/*.scss', '*.md', '*.html'];

gulp.task('watch', function() {
  gulp.watch(paths, ['jekyll']);
});

gulp.task('jekyll', function() {
  exec('jekyll build');
  livereload.reload();
});

gulp.task('serve', function() {
  livereload.listen();
  var port = 7777;
  var app = express();
  app.use(connect_livereload({
    port: 35729
    }));
  app.use(ecstatic({
    root: __dirname + '/_site'
    }));
  http.createServer(app).listen(port);
});

gulp.task('default', ['jekyll', 'serve', 'watch']);
