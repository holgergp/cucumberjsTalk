const babel = '--require-module @babel/register';
const asyncAwaitSnippets = '--format-options \'' + JSON.stringify({'snippetInterface': 'async-await'}) + '\'';
const pretty = '-f node_modules/cucumber-pretty';
const now = '--tags @now';
const notIntegrationTest = '--tags "not @integrationTest"';
const usage = '--dry-run --format usage';
const coverage = '--format \'json:coverage/cucumber_report.json\' features/**/*.feature';

module.exports = {
    'default': [babel, notIntegrationTest, asyncAwaitSnippets].join(' '),
    'trace': [babel, pretty, notIntegrationTest, asyncAwaitSnippets].join(' '),
    'traceNow': [babel, now, pretty, asyncAwaitSnippets].join(' '),
    'now': [babel, now, asyncAwaitSnippets].join(' '),
    'usage': [babel, usage].join(' '),
    'coverage': [babel, coverage, notIntegrationTest].join(' ')
};
