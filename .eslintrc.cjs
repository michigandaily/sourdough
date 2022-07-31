module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    JSX: true,
  },
  rules: {
    "no-var": "error",
    eqeqeq: "error",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }],
    "no-use-before-define": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
