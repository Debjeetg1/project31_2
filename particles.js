class Particles
{
  constructor(x, y)
  {
    var options = {
        isStatic: false,
        restitution: 0.7
    }

    this.body = Bodies.circle(x , y , 10 , options);
    this.color = color(random(0,255) , random(0, 255) , random(0,255));
    this.radius = 15;
    World.add(world , this.body);
  }

  display()
  {
    var pos = this.body.position;

    push();
    translate(pos.x , pos.y);
    fill(this.color);
    circle(0 , 0, this.radius)
    pop();
  }
}