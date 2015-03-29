define(['pole'], function (Pole) {

    var GameState = (function () {
        function GameState() {
            this.ninjaGravity = 800;
        }

        GameState.prototype = {
            create: function () {
                // Initialize game elements: background, gameObjects, layers and so on
                var ninjaJumping = false;
                var ninjaFallingDown = false;
                this.score = 0;
                this.placedPoles = 0;
                this.poleGroup = this.game.add.group();
                this.topScore = localStorage.getItem("topNinjaScore") == null ? 0: localStorage.getItem("topNinjaScore");
                this.scoreText = this.game.add.text(10, 10, "-", {font:"bold 16px Arial"});

                this.updateScore();

                this.game.stage.backgroundColor = "#87CEEB";
                this.game.physics.startSystem(Phaser.Physics.ARCADE);

                this.ninja = this.game.add.sprite(80,0, "ninja");
                this.ninja.anchor.set(0.5);
                this.ninja.lastPole = 1;
                this.game.physics.arcade.enable(this.ninja);
                this.ninja.body.gravity.y = this.ninjaGravity;
                this.game.input.onDown.add(this.prepareToJump, this);

                this.addPole(80);
            },
            update: function () {
                // Collision detection, player movement and other updates
                this.game.physics.arcade.collide(this.ninja, this.poleGroup, checkLanding);
                if(this.ninja.y > this.game.height){
                    this.die();
                }
            },
            updateScore: function () {
              this.scoreText.text = "Score: " + this.score + "\nBest: " + this.topScore;
            },
            prepareToJump: function () {
                if(this.ninja.body.velocity.y == 0){

                }
            }
        };

        return GameState;
    }());
    return GameState;
});