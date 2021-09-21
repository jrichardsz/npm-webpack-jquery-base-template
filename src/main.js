// CommonJs 和 Import 方式都可以
// require('./css/normal.css')
// import $ from 'jquery'

import './css/normal.css'
import Home from './js/home/home'
import News from './js/news/news'

$(document).ready(function() {
  var _context = {};

  var home = new Home(_context);
  _context["home"] = home;
  var news = new News(_context);
  _context["news"] = news;

  home.init();
});
