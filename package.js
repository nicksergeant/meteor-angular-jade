Package.describe({
  name: 'victor755:meteor-angular-jade',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor plugin to compile Jade into angular-meteor templates using ecmascript',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/victor-fdez/meteor-angular-jade.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('meteor-angular-jade.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('victor755:meteor-angular-jade');
  api.mainModule('meteor-angular-jade-tests.js');
});

Package.registerBuildPlugin({
  name: "compileJadeAngular",
  sources: [
    'plugin.js'
  ],
  use: [
    'babel-compiler',
    'ecmascript'
  ],
  npmDependencies : {
    'html-minifier': '0.7.2',
    'jade': '1.9.2'
  }
});

