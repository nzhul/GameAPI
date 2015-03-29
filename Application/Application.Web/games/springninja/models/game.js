define([
    'phaser',
    'bootState',
    'preloadState',
    'gameState'
], function (Phaser, BootState, PreloadState, GameState) {
    'use strict';

    function Game(container) {
        this.container = container;
        this.game = new Phaser.Game(640, 480, Phaser.CANVAS, this.container);
        this.BootState = new BootState();
        this.PreloadState = new PreloadState();
        this.GameState = new GameState();

        this.game.state.add('BootState', this.BootState);
        this.game.state.add('PreloadState', this.PreloadState);
        this.game.state.add('GameState', this.GameState);
        this.game.state.start('BootState');
    }

    return Game;
});