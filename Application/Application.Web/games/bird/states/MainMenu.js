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

            }
        };

        return MainMenuState;
    }());
    return MainMenuState;
});