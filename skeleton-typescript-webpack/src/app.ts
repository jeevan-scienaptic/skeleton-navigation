import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';


export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: [''], name: 'Home',      moduleId: './no-selection',      nav: true, title: 'Home' },
      { route: ['contacts/:id'], name: 'contacts',      moduleId: './contact-detail',      nav: false, title: 'Contact sheet' }
    ]);

    this.router = router;
  }
}
