System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  packageConfigPaths: ['node_modules/*/package.json'],
  map: {
    // SystemJS and plugins
    'plugin-babel': 'systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel/systemjs-babel-browser.js',
    'text': 'systemjs-plugin-text/text.js'
  },
  paths: {
    'app/*': 'app/*',
    'angular2/*': 'node_modules/angular2/*',
    'rxjs/*': 'node_modules/rxjs/*'
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      defaultExtension: false
    },
    'ui-router-ng2': {
      main: 'ng2.js'
    }
  }
});