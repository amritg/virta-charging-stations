module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, exclude: '/node_modules' , use: ['style-loader','css-loader']},
      {test: /\.js$/, exclude: '/node_modules', use: 'babel-loader'},
      {test: /\.js$/, exclude: '/node_modules', use: 'eslint-loader'}
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/apitmdb': {
        target: 'https://api.themoviedb.org',
        pathRewrite: {'^/apitmdb/' : ''},
        secure: false
      }
    }
  }
}