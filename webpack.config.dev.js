module.exports = {
  entry: "./client/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true
  }
};
