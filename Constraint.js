class ElasticConstraint {
    constructor(bodyA, pointB) {
        var options = {bodyA : bodyA, pointB : pointB, length : 10, stiffness : 0.004};

        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly() {
        this.body.bodyA = null;
    }
    attach(bodyA) {
        this.body.bodyA = bodyA;
    }
    display() {
        if(this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}