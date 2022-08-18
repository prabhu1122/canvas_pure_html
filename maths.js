export class Maths {
  constructor() {

    this.add = function(other) {
      this.x = this.x + other.x;
      this.y = this.y + other.y;
      return {
        x: this.x,
        y: this.y
      }
    }
  }
}
