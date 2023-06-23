module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  overrides: [{
    env: {
      "node": true
    },
    files: [".eslintrc.{js,cjs}"],
    parserOptions: {
      sourceType: "script"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react", "i18next"],
  "settings": {
    "react": {
      "version": "17.0.2"
    }
  },
  rules: {
    indent: ["error", 2],
    "max-len": ["error", {
      "code": 100,
      "ignoreComments": true
    }],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "react/jsx-filename-extension": [2, {
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
    }],
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "off",
    "i18next/no-literal-string": ["error", {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"]
    }],
    "@typescript-eslint/no-var-requires": "off",

  }
}
