# ng1-to-ng2-example - Phase 2a
This phase shows the app after going through a "big bang" migration approach
where there's no transition period inbetween Angular1 and Angular2.

* Based off the [ui-router Angular2 quickstart](https://github.com/ui-router/quickstart-ng2)
* Still in ES6 - not Typescript (that's next phase)

# Starting

To get started, run `npm start` and open [http://localhost:3000/app/index.html](http://localhost:3000/app/index.html) in your browser.

# Testing

For unit tests: `npm test`

For E2E tests: `npm run e2e`

# ng1 to ng2 migration process

The migration process from phase1 went straight from Angular1 to Angular2
without using [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html#!#upgrading-with-the-upgrade-adapter)
to transition between them.
So here's the steps I went through to migrate the application:

* Install new dependencies: `npm install --save angular2@2.0.0-beta.15 rxjs@5.0.0-beta.2 ui-router-ng2 es6-shim reflect-metadata@0.1.2 zone.js babel-plugin-transform-decorators-legacy`
Note that Angular2 beta.15 requires specific versions of rxjs and reflect-metadata
* Remove old Angular1 libraries: `npm uninstall --save angular angular-mocks angular-ui-router angular-ui-bootstrap`
* Add libraries to `app/index.html` and update SystemJS config: [ui-router/quickstart-ng2](https://github.com/ui-router/quickstart-ng2/blob/c3504223be7c054b0837cca59116d960ba5404cd/index.html)
* Change `app/index.js` to use the new Angular2 bootstrap process: [ui-router/quickstart-ng2](https://github.com/ui-router/quickstart-ng2/blob/c3504223be7c054b0837cca59116d960ba5404cd/app/_bootstrap/bootstrap.ts)
* Add ui-router config to `app/index.js`: [ui-router/quickstart-ng2](https://github.com/ui-router/quickstart-ng2/blob/c3504223be7c054b0837cca59116d960ba5404cd/app/_bootstrap/router.config.ts)
Take note to wrap classes in `angular2/core.Class` and use `parameters` instead of `$inject` for DI.
* Update all the components and services to Angular2:
    * Wrap components in `angular2/core.Component({}).Class({})`
    * Wrap services in `angular2/core.Class({})`
    * Replace `$inject` properties with `parameters`
    * Remove `$ctrl` from templates.
    * Replace `bindings` with `inputs` and `outputs`
    * Replace `$q` with `Promise`
    * Replace `$http().then()` with `http.subscribe()`
    * Disable code using ui-bootstrap's `$modal` service (No Angular2 equivalent - yet)
    * Replace `ng-if` with `*ngIf`
    * Replace `ng-repeat` with `*ngFor`
    * Replace event handler directives (eg. `ng-click`) with bracket syntax (eg. `(click)`)
    * Replace `ng-model` with `[(ngModel)]`
    * Replace `ui-sref` directives with `uiSref` for the state name and `[uiParams]` for the parameters
* Update states to work with ui-router-ng2
    * Replace `component` property values with classes instead of strings
    * Keep using `$inject` for DI into ui-router functions.
    * Inject `$transition$` into `resolve` functions to access state params with `$transition$.params()`
