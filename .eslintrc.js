module.exports = {
  "env": {
    "browser": true,
    "es8": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {

  },
  "indent": [
    true,
    "spaces",
    3
  ],
  "ter-indent": [
    false,
    "tab",
    2
  ]
};
