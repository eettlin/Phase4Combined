class Panel{
  constructor(game, x,y){
      this.x = x
      this.y = y
      this.pImg = new Image();
      this.pImg.addEventListener('error', function() { console.log(this.imgName + " failed to load"); }, false);

      this.imgName = 'woodPanel.jpg'; // large image for menu tile
      this.pImg.src = this.imgName;
      this.thing = document.createElement("div")
      this.thing.id = "panel"
      this.thing.style.width = this.pImg.width+"px"
      this.thing.style.height = this.pImg.height+"px"
      this.thing.style.position = "absolute"
      this.thing.style.top = this.y+"px"
      this.thing.style.left = this.x+"px"
      this.wrapper = document.getElementById('wrapperDiv')
      this.wrapper.appendChild(this.thing)
      this.thing.appendChild(this.pImg);
  }

  render(){
    this.thing.style.top = this.y+"px"
    this.thing.style.left = this.x+"px"
    if(this.y <= 0){
      this.y += 5
    }
    //this.ctx.drawImage(this.pImg, this.pLoc.x, this.pLoc.y)
    //this.pLoc.vec.y += 1
  }

  ceatebutton(texts){
    this.button = document.createElement("button")
    this.button.style.onclick = "clickedButton()"
    //this.button.addEventListener('click', clickedButton(), false).
    this.button.innerHTML = texts
    this.thing.appendChild(this.button)
  }

  clickedButton(){
    console.log(this.game.panelVar1)
    this.game.panelVar1 = true;
    console.log(this.game.panelVar1)
    this.game.panelVar1 = false;
  }

}
