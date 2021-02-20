class Contestant {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        'contestantCount': count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + contestantCount;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getcontestantInfo(){
      var contestantinforef=database.ref('contestants');
      contestantinforef.on("value",(data)=>{
      allcontestants=data.val();
      })
    }
  }
  