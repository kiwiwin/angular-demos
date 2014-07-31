var gulp = require('gulp');
var _ = require('lodash');
var karma = require('karma').server;
var exec = require('child_process').exec;

//one could also externalize common config into a separate file,
//ex.: var karmaCommonConf = require('./karma-common-conf.js');
var karmaCommonConf = {
  files : [
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-route/angular-route.js',
    'app/bower_components/angular-resource/angular-resource.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-mocks/angular-mocks.js',
    'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'app/js/**/*.js',
    'test/unit/**/*.js'
  ],

  // autoWatch : true,

  frameworks: ['jasmine'],

  browsers : ['Chrome'],

  plugins : [
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine'
          ],

  junitReporter : {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
  }
};


// gulp.task('config', function () {
//   var env = process.env.NODE_ENV || 'stub'

//   gulp.src('./config/' + env +'/env.config.js')
//     .pipe(gulp.dest('./app/js'));
// })

// gulp.task('run', ['config'], function (cb) {
//   exec('npm start', function (err) {
//     if (err) return cb(err);
//     cb();
//   });
// })

/**
 * Run test once and exit
 */
gulp.task('test', function () {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}));
});

/**
 * Watch for file changes and re-run tests on each change
 */
// gulp.task('tdd', function () {
//   karma.start(karmaCommonConf);
// });

gulp.task('default', ['test']);