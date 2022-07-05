const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'https://sonarcloud.io',
        options : {
            'sonar.projectKey' : 'ermeterio_fc3-ci',
            'sonar.organization' : 'ermeterio',
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'app/**/*.spec.js,app/**/*.spec.jsx,app/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
            'sonar.login' : 'c1c03b70b0b1b8080981b2e78439bd9a54b88df9'
        }
    });