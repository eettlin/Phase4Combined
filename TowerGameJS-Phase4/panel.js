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

  ceatebutton(texts, funk, id){
    var button = document.createElement("button")
    
    button.addEventListener('click',funk, false)
    console.log(button)
    button.id = id
    if(button.id === "panelStartStartButton"){
      button.imageThing = document.createElement("img")
      button.imageThing.src  = "play.png"
      this.thing.innerHTML += '<br><br><br><br><br><br>'
      button.appendChild(button.imageThing)
    }
    if(button.id === "panelStartInstructionButton"){
      button.imageThing = document.createElement("img")
      //button.imageThing.src  = "exit.png"
      button.appendChild(button.imageThing)
      this.thing.innerHTML += '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
    }
    if(button.id === "panelStartQuitButton"){
      button.imageThing = document.createElement("img")
      button.imageThing.src  = "exit.png"
      button.appendChild(button.imageThing)
      this.thing.innerHTML += '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
    }
    this.thing.appendChild(button)
  }

  lerp( a,  b,  f){
    return a + f * (b - a)
  }
}
