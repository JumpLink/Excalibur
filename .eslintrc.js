module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [__dirname + '/src/**/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: [
    'plugin:jsdoc/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private', 'static'],
        format: ['UPPER_CASE'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/indent': ['off'], // We use prettier for this
    '@typescript-eslint/no-empty-function': 'error',
    curly: 'error',
    'dot-notation': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'time', 'timeEnd', 'trace'],
      },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    radix: 'error',
    'max-len': ['error', { code: 140 }],
    semi: ['error', 'always'],
    'comma-dangle': ['off'], // We use prettier for this
    'no-trailing-spaces': 'error',
    eqeqeq: ['error', 'smart'],
    'no-irregular-whitespace': 'error',
    'brace-style': ['error', '1tbs'],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'keyword-spacing': 'error',
    'jsdoc/require-param': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/newline-after-description': 0,
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: [
          'hidden',
          'internal',
          'source',
          'obsolete',
          'warning',
          'notimplemented',
          'credit',
          'typedoc',
        ],
      },
    ],
  },
};
