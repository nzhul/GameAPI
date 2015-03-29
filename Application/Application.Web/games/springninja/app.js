(function () {
    'use strict';

    requirejs.config({

        paths: {
            //  Edit the below path to point to where-ever you have placed the phaser.min.js file
            phaser: 'libs/phaser',
            game: 'models/game',
            pole: 'models/pole',
            bootState: 'states/BootState',
            preloadState: 'states/PreloadState',
            gameState: 'states/GameState'
        },

        shim: {
            'phaser': {
                exports: 'Phaser'
            },
            'game': {
                exports: 'Game'
            },
            'pole': {
                exports: 'Pole'
            },
            'preloadState': {
                exports: 'PreloadState'
            },
            'bootState': {
                exports: 'BootState'
            }
            ,
            'gameState': {
                exports: 'GameState'
            }
        }
    });

    require(['phaser', 'game'], function (Phaser, Game) {
        var game = new Game('phaser-container');
    });
}());