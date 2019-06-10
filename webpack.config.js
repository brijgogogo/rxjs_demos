const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
    //filename: "[name].bundle.js",
    //chunkFilename: "[name].chunk.js",
    //publicPath: "/assets/"

  },
  devtool: "inline-source-map",
  devServer: {
      contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
      compress: true, //gzip
      port: 8080,
      index: 'index.html',
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
      //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      //{ test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}] },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    usedExports: true
  }
}
