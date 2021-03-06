class Paper {
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.2,
            friction: 0.5,
            density: 1.2 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        //fill(255);
        ellipse(pos.x, pos.y, radius);
    }
}