module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime', '@vue/babel-plugin-jsx'],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/plugin-transform-typescript']
    }
  ]
}
