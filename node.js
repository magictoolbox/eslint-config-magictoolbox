module.exports = {
    extends: [
        'eslint-config-magictoolbox/base'
    ].map(require.resolve),

    rules: {
        "strict": [2, "global"],
        "no-multi-str": 0,
        "prefer-rest-params": 0,
        "radix": [2, "as-needed"]
    },

    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "script",
        "ecmaFeatures": {
            "modules": false
        }
    },

    env: {
        "es6": true,
        "node": true,
        "browser": false,
        "mocha": true
    }
};
