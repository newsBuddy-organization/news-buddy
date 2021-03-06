'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'news-buddy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyA1Qnjifczr0m5kZM8bSlbjsTJe97jJinU",
      authDomain: "news-buddy-87253.firebaseapp.com",
      databaseURL: "https://news-buddy-87253.firebaseio.com",
      projectId: "news-buddy-87253",
      storageBucket: "news-buddy-87253.appspot.com",
      messagingSenderId: "1011340472134",
      appId: "1:1011340472134:web:3896f9a2ee52fa474d3f47",
      measurementId: "G-QWBR8SKLR9"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  try {
    const custom = require('./custom-config');
    ENV.NYT_API_KEY = custom.config.NYT_API_KEY;
  } catch (err) {
    console.log('config/custom-config.js not found');
  }

  return ENV;
};
