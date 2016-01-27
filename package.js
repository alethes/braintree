Package.describe({
  name: 'patrickml:braintree',
  version: '1.32.0',
  // Brief, one-line summary of the package.
  summary: 'Complete Sync wrapper for Braintree Payments.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/braintree',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(
    [
      'underscore'
    ],
    ['client', 'server']);

  api.addFiles('braintree.js', "server");
  api.export([
    'Braintree',
    'BrainTreeConnect'
  ], 'server');
});

Npm.depends({
  braintree: '1.35.0'
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patrickml:braintree');
  api.addFiles('braintree-tests.js');
});
