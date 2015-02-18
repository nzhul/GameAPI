define([], function () {

    var GameState = (function () {
        function GameState() {

        }

        GameState.prototype = {
            create: function () {
                // Set world dimentions
                this.game.world.setBounds(0,0,1920,1920);
                this.background = this.game.add.tileSprite(0,0,this.game.world.width, this.game.world.height, 'space');

                // Create player
                this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
                this.player.scale.setTo(2);

                this.player.animations.add('fly', [0,1,2,3], 5, true);
                this.player.animations.play('fly');

                // Player initial score of zero
                this.playerScore = 0;

                // enable player physics
                this.game.physics.arcade.enable(this.player);
                this.playerSpeed = 120;
                this.player.body.collideWorldBounds = true;

                //the camera will follow the player in the world
                this.game.camera.follow(this.player);

                // Generate game elements
                this.generateAsteroids();

                //sounds
                this.explosionSound = this.game.add.audio('explosion');
                this.collectSound = this.game.add.audio('collect');
            },
            update: function () {
                if(this.game.input.activePointer.justPressed()){

                    // move on the direction of the input
                    this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
                }

                // Collision between player and asteroids
                this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);
            },
            generateAsteroids: function () {
                this.asteroids = this.game.add.group();

                // Enable physics in them
                this.asteroids.enableBody = true;
                this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

                // Phaser random number generator
                var asteroidsCount = this.game.rnd.integerInRange(150, 200);
                var asteroid;

                for (var i = 0; i < asteroidsCount; i++) {
                    // Add Sprite
                    asteroid = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
                    asteroid.scale.setTo(this.game.rnd.integerInRange(10, 40) / 10);

                    // physics properties
                    asteroid.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
                    asteroid.body.velocity.y = this.game.rnd.integerInRange(-20, 20);

                    asteroid.body.immovable = true;
                    asteroid.body.collideWorldBounds = true;
                }
            },
            hitAsteroid: function (player, asteroid) {
                // play explosion sound
                this.explosionSound.play();

                // player explosion will be added here

                this.player.destroy();

                this.game.time.events.add(800, this.gameOver, this);
            }
        };

        return GameState;
    }());
    return GameState;
});