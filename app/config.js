System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  packageConfigPaths: [
    'node_modules/@angular/common/package.json',
    'node_modules/@angular/compiler/package.json',
    'node_modules/@angular/core/package.json',
    'node_modules/@angular/http/package.json',
    'node_modules/@angular/platform-browser/package.json',
    'node_modules/@angular/platform-browser-dynamic/package.json',
    'node_modules/*/package.json'
  ],
  map: {
    // SystemJS and plugins
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'text': 'node_modules/systemjs-plugin-text/text.js',

    // App libraries
    'ui-router-ng2': 'node_modules/ui-router-ng2',
    '@angular/common': 'node_modules/@angular/common',
    '@angular/compiler': 'node_modules/@angular/compiler',
    '@angular/core': 'node_modules/@angular/core',
    '@angular/http': 'node_modules/@angular/http',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic',
    'rxjs': 'node_modules/rxjs',
    'reflect-metadata': 'node_modules/reflect-metadata'
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      defaultExtension: false
    },
    'ui-router-ng2': {
      main: 'ng2.js'
    },
    '@angular/common': {},
    '@angular/compiler': {},
    '@angular/core': {},
    '@angular/http': {},
    '@angular/platform-browser': {},
    '@angular/platform-browser-dynamic': {},
    'rxjs': {},
    'reflect-metadata': {}
  }
});