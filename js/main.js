
// ENGINE SOURCE **EDIT AT YOUR OWN RISK** //

// GRAPHICS //

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// INPUT //

const mouse = {};
mouse.x = 0;
mouse.y = 0;
mouse.down = false;

// THE THING THAT MAKES IT ALL WORK //

const particleHandler = new ParticleHandler();

// EVENTS //

addEventListener('load', function(){
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;
  init();
});

addEventListener('resize', function(){
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;
});

addEventListener('mousemove', function({x, y}){
  mouse.x = x;
  mouse.y = y;
});

addEventListener('mousedown', function(){
  mouse.down = true;
});

addEventListener('mouseup', function(){
  mouse.down = false;
});

// UTIL FUNCTIONS //

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rands() {
  return Math.random() < 0.5 ? -1 : 1;
}

// FUNCTIONS //

function init() {
  loop();
}

function fill() {
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  fill();
  particleHandler.tick();
  particleHandler.draw();
  requestAnimationFrame(loop);
}