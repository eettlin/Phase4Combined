class Panel{
  constructor(game, loc){
      this.pLoc = loc
      this.ctx = this.game.cvn.context;
      this.ctx.strokeStyle = 'black';
      this.imgName = 'woodPanle.png'; // large image for menu tile
      this.pImg = new Image();
      this.pImg.addEventListener('error', function() { console.log(this.imgName + " failed to load"); }, false);
      this.pImg.src = this.imgName;
      this.thing = document.createElement("div")
      this.thing.id = "panel"
      this.thing.style.width = this.pImg.width+"px"
      this.thing.style.height = this.pImg.height+"px"
      this.thing.style.position = "absolute"
      this.thing.style.top = pLoc.y+"px"
      this.thing.style.left = pLoc.x+"px"
      this.thing.appendChild(this.pImg);
  }

  render(){
    this.thing.style.top = pLoc.y+"px"
    this.thing.style.left = pLoc.x+"px"
    if(pLoc.y >= 500){
      pLoc.y += 1
    }
    //this.ctx.drawImage(this.pImg, this.pLoc.x, this.pLoc.y)
    //this.pLoc.vec.y += 1
  }

  ceatebutton(texts){
    this.button = document.createElement("button")
  }

}
