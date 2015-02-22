define([
    'phaser',
    'bootState',
    'preloadState'
], function (Phaser, BootState, PreloadState) {
    'use strict';

    function Game(container) {
        this.container = container;
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.container);
        this.BootState = new BootState();
        this.PreloadState = new PreloadState();


        this.game.state.add('BootState', this.BootState);
        this.game.state.add('PreloadState', this.PreloadState);
        //this.game.state.add('MainMenuState', this.MainMenuState);
        //this.game.state.add('GameState', this.GameState);
        this.game.state.start('BootState');
    }

    Game.prototype = {
        Boot: function () {

        }
    };

    return Game;
});