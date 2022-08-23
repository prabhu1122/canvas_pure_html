// 👇maths import
import { Maths } from './maths.js';

//particles class
export class Particle {
  constructor(x, y, radius, color) {
    let math = new Maths();
    this.radius = radius;
    this.color = color;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.pos = math.createVector(x, y);
    this.vel = math.createVector(0, 0);
    //this.acc = createVector(0, 0.1);
    //draw the Circle ⭕⭕⭕⭕
    this.draw = function(ctx) {
      //console.log(color);
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.fillStyle = "hsl(" + this.color + ",100%,50%)";
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    };

    //draw the lines between each point
    this.lineDraw = function(ctx, other) {
      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.lineWidth = .15;
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(other.pos.x, other.pos.y);
      ctx.stroke();
    }
    //update function 60 frame per sec
    this.update = function() {
      //clac the dist b/w mouse and each particles
      this.mouse = math.createVector(mouse.x, mouse.y);
      this.acc = math.sub(this.mouse, this.pos);

      this.acc = math.norm(this.acc);
      this.acc = math.setMag(this.acc, .03);
      this.vel = math.add(this.vel, this.acc);
      //this.vel = math.setMag(this.vel, 1);
      this.pos = math.add(this.pos, this.vel);

      this.setBoundry();
      this.setInvertBoundry();
    };


    //set bounderies
    this.setBoundry = function() {
      if (this.pos.x >= innerWidth - this.radius) {
        this.pos.x = innerWidth - this.radius;
        this.vel.x *= -1;
      }
      if (this.pos.x <= this.radius) {
        this.pos.x = this.radius;
        this.vel.x *= -1;
      }
      if (this.pos.y >= innerHeight - this.radius) {
        this.pos.y = innerHeight - this.radius;
        this.vel.y *= -.5;
      }
      if (this.pos.y <= this.radius) {
        this.pos.y = this.radius;
        this.vel.y *= -1;
      }
    };
    this.setInvertBoundry = function() {
      if (this.pos.x > innerWidth - this.radius) {
        this.pos.x = 0;
      }
      if (this.pos.x < this.radius) {
        this.pos.x = innerWidth;
      }
      if (this.pos.y > innerHeight - this.radius) {
        this.pos.y = 1;
      }
      if (this.pos.y < this.radius) {
        this.pos.y = innerHeight;
      }
    };
  }
}

//event listener
const mouse = {
  x: null,
  y: null,
}

window.addEventListener('touchmove', function(event) {
  //body...
  mouse.x = event.touches[0].clientX;
  mouse.y = event.touches[0].clientY;
});

window.addEventListener('mousemove', function(event) {
  //body...
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});