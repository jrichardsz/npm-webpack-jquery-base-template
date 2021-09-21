var html = require('../../html/news_.html')

function News(_context){

  this.init = () => {
    this.render();
    this.bindListeners();
  }

  this.render = () => {
    $('#app').html(html)
  }

  this.bindListeners = () => {

  }

}

module.exports = News;
