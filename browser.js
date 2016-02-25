module.exports = {
    extends: [
        'eslint-config-magictoolbox/base'
    ].map(require.resolve),

    rules: {
    },

    parserOptions: {
    },

    env: {
        "es6": true,
        "node": false,
        "browser": true,
        "mocha": false
    }
};
