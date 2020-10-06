class sideLine {

    constructor(x, y, width, height){
      
      var line_options ={
    
       isStatic: true
    
      } 
    
      this.body = Bodies.rectangle(x, y, width, height, line_options)
      World.add(world, this.body) 
      this.image = loadImage("Dustbin.png")
    
      this.width = width;
      this.height = height;
    
    }
    
    display (){
    
      var pos = this.body.position
      
      push()
    
      imageMode(CENTER)
    
      translate(pos.x, pos.y)
    
      rotate(this.body.angle)
    
      image(this.image, 0, 0, this.width, this.height);
    
      pop()
    
    }
    }