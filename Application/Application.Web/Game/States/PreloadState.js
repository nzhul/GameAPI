define([], function () {

    var PreloadState = (function () {
        function PreloadState() {

        }

        PreloadState.prototype = {
            preload: function () {
                // Show Loading screen
                this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
                this.splash.anchor.setTo(0.5);

                this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
                this.preloadBar.anchor.setTo(0.5);

                this.load.setPreloadSprite(this.preloadBar);

                // Load game assets
                this.load.image('space', 'Game/Graphics/assets/images/space.png');
                this.load.image('rock', 'Game/Graphics/assets/images/rock.png');
                this.load.spritesheet('playership', 'Game/Graphics/assets/images/player.png', 12, 12);
                this.load.spritesheet('power', 'Game/Graphics/assets/images/power.png', 12, 12);
                this.load.image('playerParticle', 'Game/Graphics/assets/images/player-particle.png');
                this.load.audio('collect', 'Game/Graphics/assets/audio/collect.ogg');
                this.load.audio('explosion', 'Game/Graphics/assets/audio/explosion.ogg');
            },
            create: function () {
                this.state.start('MainMenuState');
            }
        };

        return PreloadState;
    }());
    return PreloadState;
});