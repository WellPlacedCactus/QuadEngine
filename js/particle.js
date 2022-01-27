

class Particle {

  constructor(x, y, vx, vy, w, h, c, a, dc, da) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.w = w;
    this.h = h;
    this.c = c;
    this.a = a;
    this.dc = dc;
    this.da = da;
    this.dead = false;
  }

  die() {
    this.dead = true;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.y < 0 || this.x > canvas.width || this.y > canvas.height) {
      this.die();
    }
  }

  chromate() {
    this.c += this.dc;
  }

  fade() {
    this.a += this.da;
    if (this.a < 0) {
      this.die();
    }
  }

  tick() {
    this.move();
    this.chromate();
    this.fade();
  }

  draw() {
    c.fillStyle = `hsla(${this.c}, 100%, 50%, ${this.a})`;
    c.fillRect(this.x, this.y, this.w, this.h);
  }
}