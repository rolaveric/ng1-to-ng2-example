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
    '*': 'node_modules/*',
    'systemjs': 'node_modules/systemjs/dist/system.js'
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