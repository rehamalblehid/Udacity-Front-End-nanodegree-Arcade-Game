// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  'use strict';
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    'use strict';
    if(this.x <= 505){
      this.x = this.x + this.speed * dt;
    } else {
        this.x = -15;
    }

    if(player.x + 30 >= this.x && player.x <= this.x + 30 && player.y + 30 >= this.y && player.y <= this.y + 30){
      player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y){
  'use strict';
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function(){
  'use strict';
  if(this.x < 0){
    this.x = 0;

  } else if(this.y < 0){
    this.reset();

  } else if(this.x > 404){
    this.x = 404;

  } else if(this.y > 404){
    this.y = 404;

  }

};
Player.prototype.reset = function() {
  'use strict';
  player.x = 202;
  player.y = 404;
};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(moveKey){
  'use strict';
  switch (moveKey) {
    case 'right':
        this.x = this.x + 90;
      break;
    case 'left':
        this.x = this.x - 90;
      break;
    case 'up':
        this.y = this.y - 90;
      break;
    case 'down':
        this.y = this.y + 90;
      break;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

// random number https://www.w3schools.com/js/js_random.asp
var enemy1 = new Enemy(-10, 60, Math.floor(Math.random() * 500) + 100);
var enemy2 = new Enemy(0, 140, Math.floor(Math.random() * 400) + 100);
var enemy3 = new Enemy(-20, 220, Math.floor(Math.random() * 500) + 100);
var enemy4 = new Enemy(-40, 220, Math.floor(Math.random() * 350) + 100);
var enemy5 = new Enemy(0, 60, Math.floor(Math.random() * 500) + 100);

allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

var player = new Player(202,404);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
