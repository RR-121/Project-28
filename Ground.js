class Ground {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var options = {isStatic : true}

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}