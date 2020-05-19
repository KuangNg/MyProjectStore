module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": "off",
    'space-before-function-paren': 0,
    "vue/no-unused-components": 0,
    'padded-blocks':0,
    'semi':0,
    'quotes':0,
    'keyword-spacing':0,
    'eqeqeq':0,
    'space-before-blocks':0,
    'comma-spacing':0,
    'no-trailing-spaces':0,
    'no-unused-vars':0
  }
}
