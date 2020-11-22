class Division
{
    constructor(x , y)
    {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y ,15 , 300, options);
      this.w = 5;
      this.h = 300;
      World.add(world , this.body);
    }

    display()
    {
      var pos = this.body.position;

      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.w , this.h);
    }
}