import R from 'ramda';
import chalk from 'chalk';
import semver from 'semver';
import packageConfig from '../package.json';
import shell from 'shelljs';

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}

const versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    },
];

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    })
}

module.exports = function () {
    const warnings = R.reduce((acc, value) => {
        if (!semver.satisfies(value.currentVersion, value.versionRequirement)) {
            return [...acc, warnings.push(value.name + ': ' +
                chalk.red(value.currentVersion) + ' should be ' +
                chalk.green(value.versionRequirement)
            )];
        }
        return acc;
    }, [], versionRequirements);

    if (warnings.length) {
        console.log('');
        console.log(chalk.yellow('To use this template, you must update following to modules:'));
        console.log();
        R.map((warning) => console.log('  ' + warning), warnings);
        console.log();
        process.exit(1)
    }
};
