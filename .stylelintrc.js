module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always', {
        except: ['blockless-after-blockless', 'blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['tailwind', 'apply', 'screen', 'font-face', 'nest'],
      },
    ],
    'at-rule-no-unknown': [
      true, {
        ignoreAtRules: ['tailwind', 'variants', 'responsive', 'apply', 'screen', 'layer'],
      },
    ],
    'property-no-unknown': [
      true, {
        ignoreProperties: ['font-path'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true, {
        ignorePseudoElements: ['range-track', 'range-thumb', 'range-lower', 'range-upper'],
      },
    ],
    'selector-nested-pattern': '^&',
  },
}
