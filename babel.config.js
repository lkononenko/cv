module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
  presets: [
    '@vue/app'
  ]
}
