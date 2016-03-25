require("babel-polyfill");

window.expect = require("chai").expect;

var srcReq = require.context("client/components", true, /\.jsx?$/);
srcReq.keys().map(srcReq);
var context = require.context("tests/client", true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
