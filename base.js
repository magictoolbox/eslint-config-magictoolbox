module.exports = {
    extends: [
        'eslint-config-airbnb/base'
    ].map(require.resolve),
    rules: {
        "func-names": 0,
        "max-len": [2, 200, 2, {
            "ignoreUrls": true,
            "ignoreComments": true
        }],
        "comma-dangle": 0,
        "no-param-reassign": 0,
        "indent": [2, 4, {"SwitchCase": 1}],
        "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true
            }
        }],
        "one-var": 0,
        "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
        "spaced-comment": 0,
        "key-spacing": 0,
        "no-cond-assign": [2, "except-parens"],
        "quote-props": [2, "consistent-as-needed"],
        "newline-per-chained-call": 0,
        "one-var-declaration-per-line": 0,
        "prefer-template": 0,
        "arrow-body-style": [0, "always"] // should we enforce it?
    },
    parserOptions: {
        "ecmaVersion": 6
    },
    env: {
        "es6": true
    }
};
