module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "react/display-name": 0,
    "max-len": [2, {"code": 140, "tabWidth": 4, "ignoreUrls": true}]
  }
};
