define([], function () {

    var PreloadState = (function () {
        function PreloadState() {

        }

        PreloadState.prototype = {
            preload: function () {
                this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
                this.preloadBar.anchor.setTo(0.5);
                this.load.setPreloadSprite(this.preloadBar);


                // Load images, sounds, tilesets and everything else for the game
                this.game.load.image("ninja", "assets/images/ninja.png");
                this.game.load.image("pole", "assets/images/pole.png");
                this.game.load.image("powerball", "assets/images/powerbar.png")

            },
            create: function () {
                this.state.start('GameState');
            }
        };

        return PreloadState;
    }());
    return PreloadState;
});