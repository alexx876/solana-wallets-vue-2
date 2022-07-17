module.exports = {
  outputDir: process.env.NODE_ENV === 'production'
      ? __dirname+'/library'
      : __dirname+'/demo',
  css: {
    extract: false
  }
}
