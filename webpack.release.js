var webpack = require("webpack");
var path = require("path");

module.exports = {
  target:  "web",
  cache:   false,
  context: __dirname,
  devtool: false,
  entry:   {
    "index":             "./src/index",
    "bootstrap-theme":   "./src/views/bootstrap/index",
    "default-theme":     "./src/views/default/index",
    "material-ui-theme": "./src/views/material-ui/index"
  },
  output:  {
    path:          path.join(__dirname),
    filename:      "[name].js",
    libraryTarget: "commonjs"
  },
  externals: [
    function(rtx, req, cb) {
      if (/\.\.\/\.\.\//.test(req)) {
        return cb(null, "commonjs redux-auth");
      } else {
        cb();
      }
    }, {
      "react": "commonjs react",
      "classnames": "commonjs classnames",
      "browser-cookies": "commonjs browser-cookies",
      "cookie": "commonjs cookie",
      "extend": "commonjs extend",
      "history": "commonjs history",
      "immutable": "commonjs immutable",
      "isomorphic-fetch": "commonjs isomorphic-fetch",
      "query-string": "commonjs query-string",
      "querystring": "commonjs querystring",
      "react-dom": "commonjs react-dom",
      "react-redux": "commonjs react-redux",
      "redux": "commonjs redux",
      "lodash": "commonjs lodash",
      "redux-immutablejs": "commonjs redux-immutablejs",
      "react-router": "commonjs react-router",
      "react-router-redux": "commonjs react-router-redux",
      "redux-thunk": "commonjs redux-thunk",
      "thunk": "commonjs thunk",
      "rc-dialog": "commonjs rc-dialog",
      "react-loader": "commonjs react-loader",
      "url": "commonjs url",
      "react-bootstrap": "commonjs react-bootstrap",
      "material-ui/Dialog": "commonjs material-ui/Dialog",
      "material-ui/Button": "commonjs material-ui/Button",
      "material-ui/TextField": "commonjs material-ui/TextField",
      "material-ui/colors": "commonjs material-ui/colors",
      "material-ui/styles/MuiThemeProvider": "commonjs material-ui/styles/MuiThemeProvider",
      "material-ui-icons/ExitToApp": "commonjs material-ui-icons/ExitToApp",
      "material-ui-icons/Favorite": "commonjs material-ui-icons/Favorite",
      "material-ui-icons/Delete": "commonjs material-ui-icons/Delete",
      "material-ui-icons/Send": "commonjs material-ui-icons/Send",
      "material-ui-icons/Lock": "commonjs material-ui-icons/Lock",
      "material-ui-icons/Error": "commonjs material-ui-icons/Error"
    }
  ],
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: "\"production\""}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.json$/, loaders: ["json"] },
      { include: /\.js$/, loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"], exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules/react")
    },
    modulesDirectories: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: ["", ".json", ".js"]
  },
  node:    {
    __dirname: true,
    fs:        "empty"
  }
};
