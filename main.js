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
  for (var i = 0; i < 1; i++) {
    particles.push(new Particle(Math.random() * width, Math.random() * height));
  }
}

function animate() {
  //render function
  ctx.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);
  particles.forEach((particle) => {
    particle.draw(ctx);
    particle.update();
  });
}

init();
animate();
