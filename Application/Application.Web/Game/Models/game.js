define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Game(container) {
        this.container = container;
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.container);
        this.Boot = function () {};
        this.Preload = function () {};
        this.MainMenu = function () {};
        var assetsRoot = 'Game/Graphics/assets';

        this.Boot.prototype = {
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

                this.state.start('Preload');
            }
        };

        this.Preload.prototype = {
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
                this.state.start('MainMenu');
            }
        };

        this.MainMenu.prototype = {
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
//                text = 'Highest score: ' + this.highestScore;
//                style = {font: '15px Arial', fill: "#fff", align: "center"};
//
//                var h = this.game.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
//                h.anchor.set(0.5);
            },
            update: function () {
                if(this.game.input.activePointer.justPressed()){
                    this.game.state.start('Game');
                }
            }
        };

        this.game.state.add('Boot', this.Boot);
        this.game.state.add('Preload', this.Preload);
        this.game.state.add('MainMenu', this.MainMenu);
        this.game.state.start('Boot');
    }

    Game.prototype = {
        Boot: function () {

        }
    };

    return Game;
});