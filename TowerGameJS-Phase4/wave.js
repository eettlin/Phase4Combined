'use strict'
class Wave {
  constructor(game,difficulty) {
    this.game=game
    this.difficulty=difficulty
  }
  startWave() {
    for(var i=0;i<this.difficulty;i++){
      this.game.sendEnemies()
    }
  }
  isWaveOver() {
    if(this.game.enemies[0]){
      return false
    }else{
      return true
    }
  }
}
AllWaves={
   "waves":[{
     

     }
   },
     {

     }
   ]
}
