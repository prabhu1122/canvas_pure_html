export class Maths {
  constructor() {

    this.createVector = function(a, b) {
      return {
        x: a,
        y: b
      };
    }

    //add vectors
    this.add = function(a, b) {
      return {
        x: a.x + b.x,
        y: a.y + b.y
      };
    };

    //add vectors
    this.sub = function(a, b) {
      return {
        x: a.x - b.x,
        y: a.y - b.y
      };
    };

    this.norm = function(vect) {
      let scaler = Math.sqrt(vect.x * vect.x + vect.y * vect.y);
      return {
        x: vect.x / scaler,
        y: vect.y / scaler
      };
    }

    this.setMag = function(vector, num) {
      return {
        x: vector.x * num,
        y: vector.y * num
      };
    }
    this.distance = function(other) {
      // body...
      let dx = other.pos.x - this.pos.x;
      let dy = other.pos.y - this.pos.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      return distance;
    };
  }
}