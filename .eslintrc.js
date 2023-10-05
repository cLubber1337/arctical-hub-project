module.exports = {
  'globals': {
    'require': true,
    '__dirname': true,
    '__API__': true,
    '__IS_DEV__': true,
    '__PROJECT__': true
  },
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  overrides: [{
    env: {
      'node': true
    },
    files: ['.eslintrc.{js,cjs}'],
    parserOptions: {
      sourceType: 'script'
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
  'settings': {
    'react': {
      'version': '17.0.2'
    }
  },
  rules: {
    indent: ['error', 2],
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true
    }],
    'react/display-name': 'off',
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'i18next/no-literal-string': 'off'
  }
}
