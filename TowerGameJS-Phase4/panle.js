class Panle{
  constructor(game, loc){
      this.loc = loc
      this.center = vector2d(loc.x+(this.game.w)/2, loc.y+(this.game.w)/2);
      this.ctx = this.game.cvn.context;
      this.ctx.strokeStyle = 'black';
      this.imgName = 'woodPanle.png'; // large image for menu tile
      this.pImg = new Image();
      this.pImg.addEventListener('error', function() { console.log(this.imgName + " failed to load"); }, false);
      this.pImg.src = this.imgName;
      this.game.cnv.appendChild(this.pImg);
  }

  render(){
    this.ctx.drawImage(this.pImg)
  }
}
