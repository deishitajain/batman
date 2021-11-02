class createDrops{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01,
          }
          this.body = Bodies.circle(x, y, 2, options);
          this.radius = 2;
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 800), y:random(0, 850)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,655);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }

