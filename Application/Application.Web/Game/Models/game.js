define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Game(container) {
        this.container = container
        console.log('Making the Game');
    }

    Game.prototype = {
        constructor: Game,

        start: function() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.container, {
                preload: this.preload,
                create: this.create
            });
        },

        preload: function() {
            this.game.load.image('logo', 'Game/Graphics/phaser.png');
        },

        create: function() {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        }
    };

    return Game;
});