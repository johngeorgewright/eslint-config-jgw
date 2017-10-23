module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'promise'
  ],
  rules: {
    'prefer-const': ['warn', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'generator-star-spacing': ['warn', {
      'before': true,
      'after': true
    }]
  }
}
