

class ParticleHandler {

  constructor() {
    this.particles = [];
    this.a = 0;
  }

  emit() {
    this.a += 0.1;
    for (let i = 0; i < 360; i += 36) {
      for (let j = 0; j < 4; j++) {
        this.particles.push(new Particle(
          canvas.width / 2,
          canvas.height / 2,
          5 * Math.sin(i * Math.PI / 180 + this.a + j * 0.01),
          5 * Math.cos(i * Math.PI / 180 + this.a + j * 0.01),
          5,
          5,
          0,
          1,
          5,
          0
        ));
      }
    }
  }

  tick() {
    this.emit();
    for (let i = this.particles.length - 1; i >= 0; --i) {
      const particle = this.particles[i];
      particle.tick();
      if (particle.dead) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw(cc) {
    for (let i = this.particles.length - 1; i >= 0; --i) {
      const particle = this.particles[i];
      particle.draw(cc);
    }
  }
}