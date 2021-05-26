class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution :0.4,
            friction :0.1
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png");
        this.Visiblity=255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        console.log(this.body.speed);
        if(this.body.speed<5){
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,40,40);

      
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
pop();
       

      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105)
      {
        score++;
      }
    }
    
  }

