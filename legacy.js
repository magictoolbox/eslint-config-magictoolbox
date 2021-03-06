module.exports = {
    extends: [
        'eslint-config-airbnb/legacy'
    ].map(require.resolve),
    rules: {
        "strict": [2, "global"],
        "func-names": 0,
        "max-len": [2, 200, 2, {
            "ignoreUrls": true,
            "ignoreComments": true
        }],
        "comma-dangle": 0,
        "indent": [2, 4, {"SwitchCase": 1}],
        "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true
            }
        }],
        "no-param-reassign": 0,
        "one-var": 0,
        "radix": [2, "as-needed"],
        "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
        "spaced-comment": 0,
        "key-spacing": [0, {"align": "colon", "beforeColon": false, "afterColon": true, "mode": "minimum"}], // can't find right config
        "no-cond-assign": [2, "except-parens"],
        "quote-props": [2, "consistent-as-needed"],
        "newline-per-chained-call": 0,
        "one-var-declaration-per-line": 0,
        "no-bitwise": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "global-require": 0
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
