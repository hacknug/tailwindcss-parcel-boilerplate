module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always', {
        'except': ['blockless-after-same-name-blockless', 'first-nested'],
        'ignore': ['after-comment'],
        'ignoreAtRules': ['apply', 'screen'],
      },
    ],
    'at-rule-no-unknown': [
      true, {
        'ignoreAtRules': ['tailwind', 'variants', 'responsive', 'apply', 'screen'],
      },
    ],
    'property-no-unknown': [
      true, {
        ignoreProperties: ['font-path']
      },
    ],
  },
}
