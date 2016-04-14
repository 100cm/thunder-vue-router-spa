module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style!css!stylus" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.html$/, loader: "html" },

    ]
  }
}