class Drops{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.001
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.r=5
        World.add (world,this.rain)
    }

    display(){
fill("blue");
var pos=this.rain.position;
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.r,this.r);

    }

    Updaterain(){
if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
}

    }

 
  

}
