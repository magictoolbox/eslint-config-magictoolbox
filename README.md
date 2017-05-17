# eslint-config-magictoolbox

## Available configs:

* magictoolbox - base ES6 config
* magictoolbox/node - ES6 config for Node.js without Babel
* magictoolbox/browser - ES6 config for frontend scripts
* magictoolbox/legacy - legacy ES5 config

### package.json

```json
"devDependencies": {
    "eslint": "^2.2.0",
    "eslint-config-magictoolbox": "^0.0.2"
  }
```

### .eslintrc

```json
{
    "extends": "magictoolbox/node",
    "rules": {
    },
    "parserOptions": {
    },
    "env": {
    }
}
```
