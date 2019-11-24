import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('articles');
=======
  this.route('login');
>>>>>>> ns_newsbuddy_login
});

export default Router;
