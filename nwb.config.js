module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RSTagsInput',
      externals: {
        react: 'React'
      }
    }
  }
}
