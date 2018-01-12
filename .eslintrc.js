module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    'no-new': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": ["error", 4, {"SwitchCase": 1, "MemberExpression": 1}],
    "space-before-function-paren": [2, "never"],                                    // require or disallow space before function opening parenthesis (off by default)
    "semi": 0,                                                                      // require or disallow use of semicolons instead of ASI
  }
};
