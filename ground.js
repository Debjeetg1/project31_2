class Ground
{
    constructor(x, y)
    {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x , y , 2400 , 30,  options);
      this.w  = 2400;
      this.h = 30;
      World.add(world, this.body);
    }

    display()
    {
      var pos = this.body.position;

      rectMode(CENTER);
      rect(pos.x , pos.y , this.w , this.h);
    }
}