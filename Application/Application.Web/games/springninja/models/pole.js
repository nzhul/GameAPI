define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Pole(game, x, y) {
        Phaser.Sprite.call(this, game, x, y, "pole");
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
        this.poleNumber = placedPoles;
    }

    Pole.prototype = Object.create(Phaser.Sprite.prototype);
    Pole.prototype.constructor = Pole;
    Pole.prototype.update = function () {

    };

    return Pole;
});