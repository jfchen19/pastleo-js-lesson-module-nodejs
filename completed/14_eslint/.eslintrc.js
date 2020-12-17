module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
  }
}
