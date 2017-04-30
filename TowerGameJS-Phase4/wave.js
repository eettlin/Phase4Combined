
class Wave {
  constructor(game,waveJson) {
    this.game=game
    this.waveJson=waveJson
    console.log(this.waveJson)
    this.enemyId=[0,0]
    this.referenceTime=this.game.gameTime+this.waveJson.waveIncrement
    this.spawnOver=false
  }
  run() {
    if(!this.spawnOver){
      while(this.game.gameTime>this.referenceTime){
        if(this.enemyId[0]<this.waveJson.packets.length){
          if(this.enemyId[1]<this.waveJson.packets[this.enemyId[0]].num){
            this.game.enemies.push(enemySelector(this.game,this.waveJson.packets[this.enemyId[0]].enemy))
            this.enemyId[1]+=1
            this.referenceTime+=this.waveJson.packets[this.enemyId[0]].enemyIncrement
          }else{
            this.referenceTime+=this.waveJson.packets[this.enemyId[0]].packetIncrement
            this.enemyId[1]=0
            this.enemyId[0]+=1
          }
        }else{
          this.spawnOver=true
          break
        }
      }
    }
  }
  startWave() {
    for(var i=0;i<this.waveJson.packets.length;i++){
      for(var j=0;j<this.waveJson.packets[i].num;j++){
        this.game.enemies.push(enemySelector(this.game,this.waveJson.packets[i].enemy))
      }
    }
  }
  isWaveOver() {
    if(!this.game.enemies[0] && this.spawnOver){
      return true
    }else{
      return false
    }
  }
}
//parses JSON
function enemySelector(game,enemyJSON) {
  for(i = 0; i < 3; i++) { // try 3 times to find valid start cell
      let row = Math.floor(Math.floor(Math.random()*(game.rows*(enemyJSON.enemyPosition[1][1]-enemyJSON.enemyPosition[1][0])))+game.rows*enemyJSON.enemyPosition[1][0]);    // row within JSON range
      let col = Math.floor(Math.floor(Math.random()*(game.cols*(enemyJSON.enemyPosition[0][1]-enemyJSON.enemyPosition[0][0])))+game.cols*enemyJSON.enemyPosition[0][0]);        // any column
      startCell = game.grid[col][row];
      if(startCell && startCell.parent)   // must have a parent to have any path
          break;
  }
  if(i < 3) { // if we found a valid cell to start the enemy
    var args=[null,game,startCell].concat(enemyJSON.additionalEnemyArguments)
    var tempEnemy= enemyJSON.enemy.bind.apply(enemyJSON.enemy,args)
      return new tempEnemy
  }
}
//so yeah,theres stuff here
AllWaves=[
  {
    "packets":[
      {
        "enemy":{
          "enemy":Enemy1,
          "enemyPosition":[
            [
              0,1
            ],
            [
              0,.5
            ]
          ],
          "additionalEnemyArguments":[
            1
          ]
        },
        "num":10,
        "enemyIncrement":1,
        "packetIncrement":1
      },
      {
        "enemy":{
          "enemy":Enemy,
          "enemyPosition":[
            [
              0,1
            ],
            [
              0,.5
            ]
          ],
          "additionalEnemyArguments":[
            0
          ]
        },
        "num":10,
        "enemyIncrement":.3,
        "packetIncrement":1
      }
    ],
    "name":"wave1",
    "waveIncrement":3
  },
  {
    "packets":[
      {
        "enemy":{
          "enemy":Enemy,
          "enemyPosition":[
            [
              0,1
            ],
            [
              0,.5
            ]
          ],
          "additionalEnemyArguments":[
            1
          ]
        },
        "num":10,
        "enemyIncrement":.1,
        "packetIncrement":1
      },
      {
        "enemy":{
          "enemy":Enemy,
          "enemyPosition":[
            [
              0,1
            ],
            [
              0,.5
            ]
          ],
          "additionalEnemyArguments":[
            0
          ]
        },
        "num":10,
        "enemyIncrement":1,
        "packetIncrement":1
      }
    ],
    "name":"wave2",
    "waveIncrement":3
  }
]
