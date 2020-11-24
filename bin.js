class Bin{
constructor(){
    
   
    
    
var options = {
    isStatic: true
}

 this.body = Matter.Bodies.rectangle(400,300,300,30,options);






    this.width = width;
    this.height = height;


    World.add(world, this.body); 
}

display(){
    var pos = this.body.position;

    rect(pos.x,pos.y,300,40);

   

    

}



}