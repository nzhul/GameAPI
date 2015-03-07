define([], function () {

    var GameState = (function () {
        function GameState() {

        }

        GameState.prototype = {
            create: function () {
                // Initialize game elements: background, gameObjects, layers and so on
            },
            update: function () {
                // Collision detection, player movement and other updates
            }
        };

        return GameState;
    }());
    return GameState;
});