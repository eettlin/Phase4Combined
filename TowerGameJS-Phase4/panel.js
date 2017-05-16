"use strict"
class Panel{
  constructor(game, number){
      this.game = game
      this.temp = 0
      this.y = -290
      this.panel = document.createElement("div")
      this.panel.id = panelJSON[number].id
      this.panel.style.width = 450+"px"
      this.panel.style.height = 290+"px"
      this.panel.style.backgroundImage = 'url("'+panelJSON[number].pic+'")'
      this.panel.style.position = "absolute"
      this.panel.align = "center"
      this.panel.style.top = this.y+"px"
      this.panel.style.textAlign = "center"
      this.wrapper = document.getElementById('wrapperDiv').appendChild(this.panel)
      for(let i = 0; i < panelJSON[number].buttonJSON.length; i++){
        this.createButton(panelJSON[number], i)
      }
  }

  render(){
    this.temp = this.lerp(this.y,300,.05)
    this.panel.style.top = this.y+"px"
    if(Math.abs(this.temp) >1){
      this.y = this.temp
    }
  }

  lerp( a,  b,  f){
    return a + f * (b - a)
  }

  createButton(JSON1, i){
    var button = document.createElement("div")
    button.id= JSON1.id
    button.style.width=123+"px"
    button.style.height=30+"px"
    button.style.position="relative"
    button.style.top=12+21*i+"%"
    button.style.left=150+"px"
    button.image = document.createElement("img")
    button.image.id = JSON1.buttonJSON[i].picId
    button.image.src = JSON1.buttonJSON[i].pic
    button.image.addEventListener("click", JSON1.buttonJSON[i].funk, false)
    button.appendChild(button.image)
    this.panel.appendChild(button)
  }
}

var panelJSON= [{
  name: "Start Panel",
  id: "firstPanel",
  pic: "pan.png",
  picId: "pan",
  buttonJSON: [
    {
      name: "Start Button",
      id: "start",
      pic: "play.png",
      picId: "play",
      funk: function(){

      }
    },{
      name: "Instruction Button",
      id: "instruction",
      pic: "",
      picId: "wframe",
      funk: function(){

      }
    },{
      name: "Quit Button",
      id: "quitButton",
      pic: "exit.png",
      picId: "exit",
      funk: function(){

      }
    }]
},{
  name: "Instruction Panel",
  id: "instructionPanel",
  pic: "pan.png",
  picId: "pan",
  buttonJSON: [
    {
      name: "Back Button",
      id: "back",
      pic: "back.png",
      picId: "back",
      funk: function(){

      }
    }]
},{
  name: "End Panel",
  id: "endPanel",
  pic: "pan.png",
  picId: "pan",
  buttonJSON: [
    {
      name: "Replay Button",
      id: "replayButton",
      pic: "",
      picId: "replay",
      funk: function(){

      }
    },{
      name: "Quit Button",
      id: "quitButton",
      pic: "exit.png",
      picId: "exit",
      funk: function(){

      }
    },{
      name: "Credits Button",
      id: "creditsButton",
      pic: "",
      picId: "credits",
      funk: function(){

      }
    }]
}]
