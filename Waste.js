class Paperball {
  constructor(x, y) {
    var options = {

        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2

    }
    this.body = Bodies.rectangle(x, y, 5, 5, options);
    this.image = loadImage("paper.png");  

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 15, 15);
    pop();
  }
}
