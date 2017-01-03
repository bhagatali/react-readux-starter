import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev.js';
import open from 'open';

const port = 3000;
const app = express(); //create an instance of express
const compiler = webpack(config); //call webpack with the config defined in webpack config

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    // console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
