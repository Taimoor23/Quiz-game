class Question {
    constructor() {
      this.input = createInput("Put in ur name");
      this.button = createButton('press me');
      this.greeting = createElement('h3');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz");
      title.position(150, 0);
     
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(200,200);
      });
        
        textSize(20);
        text("what is 20 x 10?");
    }
  }
  