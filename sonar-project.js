const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.projectKey' : 'fc3-ci',
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'app/**/*.spec.js,app/**/*.spec.jsx,app/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
            'sonar.login' : 'sqp_6c64f1a9160db76ce5ac36c80036663c669031df'
        }
    });