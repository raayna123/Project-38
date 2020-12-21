class Cactus {

    constructor(x, y, width, height) {
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/cactus.jpg");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("lightgrey");
        image(this.image, pos.x, pos.y, this.width, this.height);
        if(trex.x - this.body.position.x >= 1000) {
            this.body.position.x = trex.x + 400;
        }
    }
}