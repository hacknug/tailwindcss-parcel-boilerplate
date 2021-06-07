module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-cond-assign': ['error', 'except-parens'],
    'quote-props': ['warn', 'consistent-as-needed'],

    'no-unused-expressions': 'off',
    // 'babel/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  },
}
