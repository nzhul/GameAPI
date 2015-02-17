define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Game(container) {
        this.container = container;
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.container);
        this.BootState = function () {};
        this.PreloadState = function () {};
        this.MainMenuState = function () {};
        this.GameState = function () {};
        var assetsRoot = 'Game/Graphics/assets';

        this.BootState.prototype = {
            preload: function () {
                this.load.image('logo', assetsRoot + '/images/logo.png');
                this.load.image('preloadbar', assetsRoot +'/images/preloader-bar.png');
            },
            create: function () {
                // Loading screen will have a white background
                this.game.stage.backgroundColor = '#fff';

                // scaling options
//                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//                this.scale.minWidth = 240;
//                this.scale.minHeight = 170;
//                this.scale.maxWidth = 2880;
//                this.scale.minHeight = 1920;

                // have the game centered horizontally
//                this.scale.pageAlignHorizontally = true;

                // screen size will be set automatically
//                this.scale.setScreenSize(true);

                // physics system for movement
                this.game.physics.startSystem(Phaser.Physics.ARCADE);

                this.state.start('PreloadState');
            }
        };

        this.PreloadState.prototype = {
            preload: function () {
                // Show Loading screen
                this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
                this.splash.anchor.setTo(0.5);

                this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
                this.preloadBar.anchor.setTo(0.5);

                this.load.setPreloadSprite(this.preloadBar);

                // Load game assets
                this.load.image('space', assetsRoot + '/images/space.png');
                this.load.image('rock', assetsRoot + '/images/rock.png');
                this.load.spritesheet('playership', assetsRoot + '/images/player.png', 12, 12);
                this.load.spritesheet('power', assetsRoot + '/images/power.png', 12, 12);
                this.load.image('playerParticle', assetsRoot + '/images/player-particle.png');
                this.load.audio('collect', assetsRoot + '/audio/collect.ogg');
                this.load.audio('explosion', assetsRoot + '/audio/explosion.ogg');
            },
            create: function () {
                this.state.start('MainMenuState');
            }
        };

        this.MainMenuState.prototype = {
            init: function (score) {
                var score = score || 0;
                this.highestScore = this.highestScore || 0;

                this.highestScore = Math.max(score, this.highestScore);
            },
            create: function () {
                // Show the space tile, repeated

                this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

                // give it speed in x
                this.background.autoScroll(-20, 0);

                // Start game text
                var text = "Tap to begin";
                var style = {font: '30px Arial', fill: "#fff", align: "center"};
                var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
                t.anchor.set(0.5);

                // Highest score
                text = 'Highest score: ' + this.highestScore;
                style = {font: '16px Arial', fill: "#fff", align: "center"};

                var h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
                h.anchor.set(0.5, 1);
            },
            update: function () {
                if(this.game.input.activePointer.justPressed()){
                    this.game.state.start('GameState');
                }
            }
        };

        this.GameState.prototype = {
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
            },
            update: function () {
                if(this.game.input.activePointer.justPressed()){

                    // move on the direction of the input
                    this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
                }
            }
        };

        this.game.state.add('BootState', this.BootState);
        this.game.state.add('PreloadState', this.PreloadState);
        this.game.state.add('MainMenuState', this.MainMenuState);
        this.game.state.add('GameState', this.GameState);
        this.game.state.start('BootState');
    }

    Game.prototype = {
        Boot: function () {

        }
    };

    return Game;
});