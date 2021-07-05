class Box{
    constructor(x,y,w,h){

        var options = {
            restitution: 0.5,
            friction: 1,
            density: 0.05
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world ,this.body);
    }

    display(){
        const pos = this.body.position;
        const angle = this.body.angle;


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("yellow");
        fill("red");
        rect(0, 0, this.w, this.h);
        pop();
    }
}