define([], function () {

    var MainMenuState = (function () {
        function MainMenuState() {

        }

        MainMenuState.prototype = {
            init: function (score) {
                var score = score || 0;
                this.highestScore = this.highestScore || 0;

                this.highestScore = Math.max(score, this.highestScore);
            },
            create: function () {
                this.game.add.sprite(100,70,'logo');
                this.game.add.sprite(172,230,'bird');
                this.game.add.sprite(145,340,'space-for-start');
            },
            update: function () {
                if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
                    this.game.state.start('GameState');
                }
            }
        };

        return MainMenuState;
    }());
    return MainMenuState;
});