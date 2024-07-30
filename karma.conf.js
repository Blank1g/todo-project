module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
        suppressAll: true // removes the duplicated failures
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/my-angular-project'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadlessCustom'],
      customLaunchers: {
        ChromeHeadlessCustom: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu']
        }
      },
      singleRun: false,
      restartOnFileChange: true
    });
  };