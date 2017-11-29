module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, exclude: '/node_modules' , use: ['style-loader','css-loader','sass-loader']},
      {test: /\.scss$/, exclude: '/node_modules' , use: ['style-loader','css-loader','sass-loader']},
      {test: /\.js$/, exclude: '/node_modules', use: 'babel-loader'},
      {test: /\.js$/, exclude: '/node_modules', use: 'eslint-loader'}
    ]
  }
}