function Home(_context){

  this.init = () => {
    this.render();
    this.bindListeners();
  }

  this.render = () => {
    $('#app').html(`<button id="clickme" type="button">Click Me!</button>`)
  }

  this.bindListeners = () => {
    $( "#clickme" ).click(this.clickAction);
  }

  this.clickAction = ()=>{
    console.log("click");
    _context["news"].init();
  }

}

module.exports = Home
