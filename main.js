import { Particle } from './particle.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//handel mouse

let p;
let color;
let particles = [];
//this function call the function many time which we call inside this
function init() {
  //loop function
  for (var i = 0; i < 1; i++) {
    color = Math.random() * 256;
    particles.push(new Particle(width / 2, height / 2, 8, color));
  }
}

function animate() {
  //render function
  ctx.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);
  particles.forEach((particle, index_1) => {
    particle.draw(ctx);
    particle.update();
  });
}

init();
animate();
