

//cubumber.js
let options = [
    '--require-module ts-node/register',//load Typescript module
    '--require ./steps*//*.ts',//load step definitions
    '--format progress',//load custom formatter
].join(' ');

let run_features = [
    './features/',// Specify our feature files
    options,
].join(' ');

module.exports = {
    test_runner : run_features
};  