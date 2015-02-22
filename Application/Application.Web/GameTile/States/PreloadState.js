define([], function () {

    var PreloadState = (function () {
        function PreloadState() {

        }

        PreloadState.prototype = {
            preload: function () {

            },
            create: function () {
                this.state.start('MainMenuState');
            }
        };

        return PreloadState;
    }());
    return PreloadState;
});