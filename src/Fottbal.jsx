export class Footbal{
    name="";
    date =new Date().toLocaleDateString(); 
    mus;
    constructor(name=""){
     this.name=name;   
     this.mus=[new Prize("Best"),new Prize("Favourite")]
    }
}
class Prize{
    name="";
    date=new Date().toLocaleDateString();
    constructor(name){
        this.name=name;
    }
}