  export class Maths {
  constructor() {
    this.createVector = function(x, y){
      this.x = x
      this.y = y
      return {
        x: this.x,
        y: this.y
      }
    }
    
    this.add = function(vector) {
      this.x += vector.x;
      this.y += vector.y;
      return {
        x: this.x,
        y: this.y
      }
    }
  }
}
