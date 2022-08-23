import { Particle } from './particle.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//handel mouse

let p;
let particles = [];
//this function call the function many time which we call inside this
function init() {
  //loop function
  for (var i = 0; i < 10; i++) {
    particles.push(new Particle(Math.random() * width, Math.random() * height, 3, Math.random() * 256));
  }
}

function animate() {
  //render function
  ctx.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);
  particles.forEach((particle, index_1) => {
    particle.draw(ctx);
    particle.update();
    particles.forEach((otherParticles, index_2) => {
      particle.lineDraw(ctx, otherParticles);
    });
  });
}

init();
animate();