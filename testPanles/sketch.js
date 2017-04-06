'use strict'

// wait for the window to load and than call back setup()
window.addEventListener('load', setup, false);

var towerGame;   // the global game object
const FRAME_RATE=30;
var cellId = 0;


function setup() {
  towerGame = new Game();
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
    towerGame.run();
    window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}

// Game is the top level object and it contains the levels
class Game {
  //  This is a test
  constructor() { // from setup()
    this.isRunning = true;
    this.placingTower = false;
    this.currentTower = 0;
    this.towerType = 0;
    this.gameTime = 0;
    this.towers = [];
    this.enemies = [];
    this.bullets = [];
    this.bankValue = 500;
    this.canvas = document.createElement("canvas");
    if(!this.canvas || !this.canvas.getContext)
        throw "No valid canvas found!";
    this.canvas.width = 900;
    this.canvas.height = 750;
    document.getElementById('canDiv').appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    if(!this.context)
        throw "No valid context found!";
    this.lastTime = Date.now();
    //select everything of type/class and set call backs
    this.tileDivs = this.createTileDivs();
    //this.loadDOMCallBacks(this.tileDivs);
    // select canvas for callbacks
    this.canvas.addEventListener('mousemove',this.handleCNVMouseMoved,false);
    this.canvas.addEventListener('mouseover',this.handleCNVMouseOver, false);
    this.canvas.addEventListener('click', this.handleCNVMouseClicked, false);

    window.addEventListener('keypress', function(evt) {
        if(evt.key == "E" || evt.key == "e")
            towerGame.sendEnemies();
        }, false);

    this.mouseX = 0;
    this.mouseY = 0;
    this.w = 20;
    this.done = false;
    // containerarrays for cells
    this.grid = [];
    this.cols = Math.floor(this.canvas.width / this.w);
    this.rows = Math.floor(this.canvas.height / this.w);

    this.loadGrid();
    this.root = this.grid[this.cols - 1][this.rows -1];
    //this.brushfire();
}

  // The success callback when a tower canvas image
  // or bullet image has loaded.  Hide them from
  // displaying on the page.
  hideImgElement() { this.style.display = "none"; }

  run() { // called from draw()
    let gt = this.updateGameTime();
    //this.updateInfoElements(gt);
    //this.removeBullets();
    //this.removeEnemies();
    if (this.isRunning) {
      //this.render();
    }

    // draw the grid
    for(let i = 0; i < this.cols; i++){
      for(let j = 0; j < this.rows; j++){
        //this.grid[i][j].render();
      }
    }
    // some help text in the bottom left of the canvas
    this.context.save();
    this.context.fillStyle = "white";
    this.context.font = "14px sans-serif";
    this.context.fillText("Press the E key to send enemies", 20, this.canvas.height-20);
    this.context.restore();
  }

  render() { // draw game stuff
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);

  }

      // brushfire()
    // starting with the 'root' cell, which is the bottom right cell of the grid
    // assign a "distance" to all other cells where the distance is the
    // accumulated steps from that cell to the root cell.
    // An adjacent neighbor has a step of 10
    // and a diagonal neighbor has a step of 14.

  updateGameTime(){
    var millis = Date.now();
    if(millis - this.lastTime >= 1000) {
      this.gameTime++;
      this.lastTime = millis;
    }
    return this.gameTime;
  }

   // +++++++++++++++++++++++++++++++++++++++++++  load a 2D array with cells
  loadGrid(){
    for(var i = 0; i < this.cols; i++){     // columns of rows
      this.grid[i] = [];
      for(var j = 0; j < this.rows; j++){
        //this.grid[i][j] = new Cell(this, vector2d((i*this.w), (j*this.w)), ++cellId);
        // make 10% of the cells occupied
        if(this.grid[i][j] != this.root && Math.floor(Math.random()*100) < 10)
            this.grid[i][j].occupied = true;
      }
    }

  }  // ++++++++++++++++++++++++++++++++++++++++++++++  End LoadGrid



  // Create the divs to hold the menu of towers with
  // the large images.  This divs also contain the
  // parameters for creating towers to be drawn on the
  // canvas.
  createTileDivs(){
    var tiles = [];

    for(var i = 0; i < 5; i++){
      var mtd = document.createElement("div"); // createDiv("");
      //var cnvTurImgPath = "tow" + (i+1) + "s.png";  // small tower image for canvas
      //var cnvBulImgPath = "b" + (i+1) + ".png";     // bullet image for canvas
      //mtd.cnvTurImg = new Image();
      //mtd.cnvTurImg.addEventListener('load',this.hideImgElement,false);
      //mtd.cnvTurImg.addEventListener('error', function() { console.log(cnvTurImgPath + " failed to load"); }, false);
      //mtd.cnvTurImg.src = cnvTurImgPath;    // start loading image

      //mtd.cnvBulImg = new Image();
      //mtd.cnvBulImg.addEventListener('load',this.hideImgElement,false);
      //mtd.cnvBulImg.addEventListener('error', function() { console.log(cnvBulImgPath + " failed to load"); }, false);
      //mtd.cnvBulImg.src = cnvBulImgPath;    // start loading image

      document.getElementById("menuDiv").appendChild(mtd);

      //mtd.cost = 100*i +50;
      //mtd.id = 'towImgDiv' + i;
      tiles.push(mtd);
      //var imgName = 'tow' + i + '.png'; // large image for menu tile
      //var tImg = new Image();
      //tImg.addEventListener('error', function() { console.log(imgName + " failed to load"); }, false);
      //tImg.src = imgName;
      //mtd.appendChild(tImg);
    }
    return tiles;
  }
} // end Game class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
