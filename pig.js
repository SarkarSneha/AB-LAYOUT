class Pig{
    constructor(x,y) {
        var options = {
            'restitution':1,
            'friction':0.7,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30,30, options);
        this.width = 30;
        this.height = 30;
       // this.radius=radius
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lime");
        rect(0,0, this.width,this.height);
        pop();
      }
    };
    
