class Trex {

    constructor(x, y, width, height) {
        var options ={
            isStatic: false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/trexImage.png");
        // this.image.velocityX = speed;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("lightgrey");
        image(this.image,pos.x, pos.y, this.width, this.height);
    }
}
