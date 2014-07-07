var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');

var html = jade('templates', {
  basedir: 'templates'
});

var css = compileSass(['styles'], 'main.scss', 'style.css', {sourceMap: true, outputStyle: 'compressed'});

var assets = pickFiles('public', {
  srcDir: '/',
  destDir: '/'
})

module.exports = mergeTrees([html, css, assets]);
