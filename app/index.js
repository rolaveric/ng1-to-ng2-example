import {trace, UIROUTER_PROVIDERS, UiView, UIRouterConfig, Category} from 'ui-router-ng2';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide, Class, Injector, enableProdMode} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {getStates} from './states.js';
import {NumbersModel} from './model/numbers.js';
import {LoginModel} from './model/login.js';

export class MyUIRouterConfig {
  static get parameters() {
    return [[Injector]];
  }

  constructor(injector) {
    this.injector = injector;
  }

  configure(uiRouter) {
    // Register each state
    getStates().forEach(state => uiRouter.stateRegistry.register(state));

    // Specifies the default state - Similar to $urlRouterProvider.otherwise()
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('numbers-list', null, null));

    // As of 1.0.0-alpha.2, ui-router only supports ng1-style string-based injection for resolves and transition hooks.
    // We're working on more ng2-friendly DI.

    // In the meantime, you can map global providers to strings here, and then use the strings
    // to inject the service into your resolve or transition hook.

    let rootState = uiRouter.stateRegistry.root();

    rootState.resolve['numbersModel'] = () => this.injector.get(NumbersModel);
  }
}
Class({constructor: MyUIRouterConfig});

/**
 * Handles application bootstrap process
 * @param [prod=false] {boolean} If true, runs app in prod mode
 */
export function bootstrapApp(prod=false) {
  if (prod) {
    enableProdMode();
  } else {
    trace.enable(Category.TRANSITION, Category.VIEWCONFIG);
  }

  bootstrap(UiView, [
    // Need to specify what the LocationStrategy and PlatformLocation providers are for ui-router to work with
    provide(LocationStrategy, { useClass: HashLocationStrategy  }), // Use PathLocationStrategy if using HTML5 compatible paths
    provide(PlatformLocation, { useClass: BrowserPlatformLocation }),

    ...UIROUTER_PROVIDERS,
    ...HTTP_PROVIDERS,
    NumbersModel,
    LoginModel,

    provide(UIRouterConfig, { useClass: MyUIRouterConfig })
  ]);
}