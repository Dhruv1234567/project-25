class dustbin {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x,y,width,height, { isStatic: true });
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img=loadImage("sprites/dustbingreen.png");
    }
    display() {
        var t = this.body.position;
        rect(t.x, t.y, this.width, this.height);
        imageMode(CENTER);
        image(this.img,t.x,t.y,160,150);
    }
}
