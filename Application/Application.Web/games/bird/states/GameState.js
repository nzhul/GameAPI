define([], function () {

    var GameState = (function () {
        function GameState() {

        }

        GameState.prototype = {
            create: function () {

                // The Bird
                this.bird = this.game.add.sprite(100,245, 'bird');
                this.game.physics.arcade.enable(this.bird);
                this.bird.body.gravity.y = 1000;

                var jumpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                jumpKey.onDown.add(this.jump, this);

                // Pipes
                this.pipes = this.game.add.group();
                this.pipes.enableBody = true;
                this.pipes.physicsBodyType = Phaser.Physics.ARCADE;
                this.pipes.createMultiple(20,'pipe');
                this.pipes.setAll('checkWorldBounds', true);
                this.pipes.setAll('outOfBoundsKill', true);

                this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);

                // Scoring
                this.playerScore = 0;
                this.showLabels();

            },
            update: function () {
                if(this.bird.inWorld == false){
                    this.playerCollision();

                    // Switch to MainMenu State
                }
                this.game.physics.arcade.overlap(this.bird, this.pipes, this.playerCollision, null, this );
            },
            jump: function () {
                this.bird.body.velocity.y = -350;
            },
            playerCollision: function () {
                this.game.time.events.remove(this.timer);

                // TODO: Add death animation and then change the state to MainMenu
                this.game.state.start('GameState');
            },
            addOnePipe: function (x, y) {
                // Get the first dead pipe of our group
                var pipe = this.pipes.getFirstDead();

                pipe.reset(x, y);

                // Set the new position of the pipe
                pipe.body.velocity.x = -200;

            },
            addRowOfPipes: function () {
                var hole = Math.floor(Math.random()*5) + 1;

                for (var i = 0; i < 8; i++) {
                    if(i != hole && i != hole+1){
                        this.addOnePipe(400, i*60+10);
                    }
                }

                // Update score
                this.playerScore++;
                this.scoreLabel.text = this.playerScore;
            },
            showLabels: function () {
                var text = "0";
                var style = {font: "20px Arial", fill:"#000", align: "center"};
                this.scoreLabel = this.game.add.text(this.game.width-50, this.game.height-50, text, style);
            }
        };

        return GameState;
    }());
    return GameState;
});