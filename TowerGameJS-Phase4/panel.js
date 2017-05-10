"use strict"
class Panel{
  constructor(game, x,y, id){
      this.x = x
      this.y = y
      this.pImg = new Image();
      this.pImg.addEventListener('error', function() { console.log(this.imgName + " failed to load"); }, false);
      this.game=game
      this.imgName = "pan.png"; // large image for menu tile
      this.pImg.src = this.imgName;
      this.thing = document.createElement("div")
      this.thing.id = id
      this.thing.style.width = 450+"px"
      this.thing.style.height = 290*3+"px"
      this.thing.style.position = "absolute"
      this.thing.style.backgroundImage = 'url("pan.png")'
      this.thing.style.top = this.y+"px"
      //this.thing.style.left = this.x+"px"
      this.thing.style.textAlign = "center"
      this.thing.align = "center"
      document.getElementById('wrapperDiv').appendChild(this.thing)
      //this.thing.appendChild(this.pImg);
      this.temp = 0
      this.intcrament  = 0
      this.go = false
  }

  render(){
    this.temp = this.lerp(this.y,0,.05)
    this.thing.style.top = this.y+"px"
    //this.thing.style.left = this.x+"px"
    if(this.y <= 100){
      if(this.temp <-1){
        this.y = this.temp
      }
    }
    //this.ctx.drawImage(this.pImg, this.pLoc.x, this.pLoc.y)
    //this.pLoc.vec.y += 1
  }

  ceatebutton(texts, thing, id){
    this.button = document.createElement("button")
    this.button.addEventListener('click',thing, false)
    this.button.id = id
    if(this.button.id === "panelStartStartButton"){
      this.button.imageThing = document.createElement("img")
      this.button.imageThing.src  = "play.png"
      this.thing.innerHTML += '<br><br><br><br><br><br>'
      this.button.appendChild(this.button.imageThing)
    }
    if(this.button.id === "panelStartInstructionButton"){
      this.button.imageThing = document.createElement("img")
      //this.button.imageThing.src  = "exit.png"
      this.button.appendChild(this.button.imageThing)
      this.thing.innerHTML += '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
    }
    if(this.button.id === "panelStartQuitButton"){
      this.button.imageThing = document.createElement("img")
      this.button.imageThing.src  = "exit.png"
      this.button.appendChild(this.button.imageThing)
      this.thing.innerHTML += '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
    }
    this.thing.appendChild(this.button)
  }

  lerp( a,  b,  f){
    return a + f * (b - a)
  }
}
