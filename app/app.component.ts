import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { WelcomeComponent } from './welcome/welcome.component';
@Component({
    selector: 'comp-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    }
])
export /**
 * AppComponent
 */
class AppComponent {
    pageTitle: string = 'App';
}