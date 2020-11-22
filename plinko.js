class Plinko
{
    constructor(x, y )
    { 
      var options = {
          isStatic: true
      }

      this.plinko = Bodies.circle(x, y , 10 , options);
      this.radius = 10;
      World.add(world , this.plinko)
    }

    display()
    {
      var pos = this.plinko.position;

      fill("white");
      circle(pos.x , pos.y , this.radius);
    }
}