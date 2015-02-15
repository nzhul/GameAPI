define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Game(container) {
        this.container = container;
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.container);
        this.Boot = function () {};

        this.Boot.prototype = {
            preload: function () {
                this.load.image('logo', 'Game/Graphics/phaser.png');
                this.load.image('preloadbar', 'assets/images/preloader-bar.png');
            },
            create: function () {
                // Loading screen will have a white background
                this.game.stage.backgroundColor = '#ccc';

                // scaling options
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 240;
                this.scale.minHeight = 170;
                this.scale.maxWidth = 2880;
                this.scale.minHeight = 1920;

                // have the game centered horizontally
                this.scale.pageAlignHorizontally = true;

                // screen size will be set automatically
                this.scale.setScreenSize(true);

                // physics system for movement
                this.game.physics.startSystem(Phaser.Physics.ARCADE);

                this.state.start('Preload');
            }
        };

        this.game.state.add('Boot', this.Boot);
        this.game.state.start('Boot');
    }

    Game.prototype = {
        Boot: function () {

        }
    };

    return Game;
});