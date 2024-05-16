const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
const initialCode = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');
const js = require('../index.js');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});

module.exports = {
  chai,
  sinon,
  fs,
  jsdom,
  path,
  babel,
  html,
  js,
  babelResult,
  src,
  initialCode
}