class Paper{
    constructor(x,y,width,height){
        //this.image = loadImage("sprites/paper.png");
        

        var options = {
        isStatic: false,
        restitution: 1,
        friction: 1,
        density: 1,
        }

        
        this.width = width;
        this.height = height;
        
         this.body = Matter.Bodies.circle(200,200,30,options);
        


        

    
        World.add(world, this.body); 
      
    }

    display(){
        var pos = this.body.position;

       // imageMode(CENTER);

       // image(this.image, pos.x, pos.y, this.width, this.height);

        
        ellipse(pos.x,pos.y,60,60);



    }


} 