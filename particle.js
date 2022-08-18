// 👇maths import
import { Maths } from './maths.js';

//particles class
export class Particle {
  constructor(x, y) {
    let math = new Maths();
    this.radius = 5;
    this.density = (Math.random() * 20) + 5; //create random no '0 to 30
    this.distance = function(other) {
      // body...
      let dx = other.pos.x - this.pos.x;
      let dy = other.pos.y - this.pos.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      return distance;
    };
    
    function createVector(a,b) {
      return {
        x: a,
        y: b
      };
    }

    //add vectors
    function add(a, b) {
      x = a.x + b.x;
      y = a.y + b.y;
      return {
        x: x,
        y: y
      };
    };

    //add vectors
    function sub(a, b) {
      x = a.x - b.x;
      y = a.y - b.y;
      return {
        x: x,
        y: y
      };
    };

    function norm(vect) {
      let scaler = Math.sqrt(vect.x * vect.x + vect.y * vect.y);
      return {
        x: vect.x / scaler,
        y: vect.y / scaler
      };
    }

    function setMag(vector, num) {
      return {
        x: vector.x * num,
        y: vector.y * num
      };
    }

    this.pos = createVector(innerWidth/2, innerHeight/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);

    this.draw = function(ctx) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 0, 255)';
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    };

    this.update = function() {

      //clac the dist b/w mouse and each particles
      /*this.mouse = createVector(mouse.x, mouse.y);
      this.acc = sub(this.mouse, this.pos);
      */
      this.acc = norm(this.acc);
      this.acc = setMag(this.acc, .1);
      this.vel = add(this.vel, this.acc);
      //this.vel = setMag(this.vel, 1);
      this.pos = add(this.pos, this.vel);

      this.setBoundry();
      //this.setInvertBoundry();
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
        this.pos.x = 1;
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
  //radius: 100
}

window.addEventListener('touchmove', function(event) {
  //body...
  mouse.x = event.touches[0].clientX;
  mouse.y = event.touches[0].clientY;
  //mouse.radius = 100;
});

window.addEventListener('mousemove', function(event) {
  //body...
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  //mouse.radius = 100;
});
