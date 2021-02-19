const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//handel mouse
const mouse = {
    x: null,
    y: null,
    radius: 100
}

window.addEventListener('mousemove', function(event) {
    //body...
    mouse.x = event.x;
    mouse.y = event.y;
    mouse.radius = 100;
});

//particles class
class Particle {
    constructor(x, y) {
        this.radius = 5;
        this.density = (Math.random() * 20) + 5; //create random no '0 to 30'

        this.distance = function(other) {
            // body...
            let dx = other.pos.x - this.pos.x;
            let dy = other.pos.y - this.pos.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance;
        }
        // create vector
        function createVector(x, y) {
            return {
                x: x,
                y: y
            };
        }
        //add vectors
        function add(a, b) {
            a.x += b.x;
            a.y += b.y;
        }

        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, .31);

        this.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255,0,255)';
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        };

        this.update = function() {
            //clac the dist b/w mouse and each particles
            add(this.pos, this.vel);
            add(this.vel,this.acc);
            this.setBoundry();
        }
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
        }
    }
}

let p;
//this function call the function many time which we call in side this
function init() {
    //loop function
    p = new Particle(canvas.width / 2, canvas.height / 2);
}
init();

function animate() {
    //render function
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    p.draw();
    p.update();
}
animate();

//