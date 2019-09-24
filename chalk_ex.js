const chalk = require('chalk')
console.log(chalk.blue('Hello world!'));

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

console.log(chalk.yellow.italic.inverse('Shikha'))

console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));