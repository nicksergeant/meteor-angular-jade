Package.describe({
  name: 'nicksergeant:meteor-angular-jade',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Meteor plugin to compile Jade into angular-meteor templates using ecmascript',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nicksergeant/meteor-angular-jade.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('isobuild:compiler-plugin@1.0.0')
  api.mainModule('meteor-angular-jade.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nicksergeant:meteor-angular-jade');
  api.mainModule('meteor-angular-jade-tests.js');
});

Package.registerBuildPlugin({
  name: "ngJadeCompiler",
  sources: [
    'plugin.js'
  ],
  use: [
    'babel-compiler@7.0.0',
    'angular-templates@1.0.3',
    'ecmascript',
    'caching-compiler@1.0.4'
  ],
  npmDependencies : {
    'html-minifier': '0.7.2',
    'jade': '1.9.2'
  }
});
