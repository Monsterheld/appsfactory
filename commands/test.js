#!/usr/bin/env node

const Launcher = require('@wdio/cli').default;
const featureFlag = process.argv.find(value => value.startsWith('--feature'));
const logLvlFlag = process.argv.find(value => value.startsWith('--logLevel'));
const helpFlag = process.argv.find(value => value.startsWith('--help'));

if (helpFlag) {
  console.log(
    `Flags:
      --feature   type name of the feature  e.g. --feature=vacancy
      --logLevel  type logLevel             e.g. --logLevel=trace   possible values are trace | debug | info | warn | error | silent
      --help      show help
    `
  );
  return;
}

const opts = {};
if (featureFlag) {
  const feature = featureFlag.split('=')[1];
  const multipleFeatures = feature.split(',');
  opts.specs =
    multipleFeatures.length > 1
      ? multipleFeatures.map(feature => `./test/features/${feature}.feature`)
      : [`./test/features/${feature}.feature`];
}

if (logLvlFlag) {
  opts.logLevel = checkAndGetLogLevel(logLvlFlag);
}

const wdio = initWdio(opts);

wdio.run().then(
  code => {
    process.exit(code);
  },
  error => {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
  }
);

function initWdio(opts) {
  if (Object.keys(opts).length > 0) {
    return new Launcher('./wdio.conf.js', opts);
  }

  return new Launcher('./wdio.conf.js');
}

function checkAndGetLogLevel(logLvlFlag) {
  const logLvl = logLvlFlag.split('=')[1];
  if (
    logLvl === 'trace' ||
    logLvl === 'debug' ||
    logLvl === 'info' ||
    logLvl === 'warn' ||
    logLvl === 'error' ||
    logLvl === 'silent'
  ) {
    return logLvlFlag.split('=')[1];
  }

  console.error(
    `please choose one of the logLevels "trace | debug | info | warn | error | silent", "${logLvl}" isn't one of these. set default to "silent"`
  );
  return 'silent';
}
