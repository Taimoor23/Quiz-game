class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountref= await database.ref('ContestantCount').once("value");
        if(contestantCountref.exists()){
          contestantCount=contestantCountref.val();
          contestant.getCount();
        }
      
        question = new Question()
        question.display();
      }
    }
    play(){
      question.hide();
      textSize(30);
      text("Starting the game",110,100);
      Contestant.getContestantInfo();
  
      if(allContestants!==undefined){
        var display_position=130;
        for(var plr in allContestants){
          if (plr === "contestant"+ contestant.index){
            fill("red");
          }
          else{
            fill("black");
          }
          display_position+=20;
          textSize(15);
          text(allContestants[plr].name+": "+allContestants[plr].distance,120,display_position);
  
        }
      }
      if(keyIsDown(UP_ARROW)&& contestant.index!==null){
        contestant.distance+=50;
        contestant.update();
      }
    }
  }
  