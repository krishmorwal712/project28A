  
class luncher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.luncher = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.luncher);
    }

    display(){
       
        if(this.luncher.bodyA){
        strokeWeight(10);
      
        line(this.luncher.bodyA.position.x,this.luncher.bodyA.position.y,
            this.pointB.x,this.pointB.y )
        }

    }
    fly(){
        this.luncher.bodyA=null
    }
}