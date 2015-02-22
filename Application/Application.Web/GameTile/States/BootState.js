define([], function () {

    var BootState = (function () {
        function BootState() {

        }

        BootState.prototype = {
            preload: function () {

            },
            create: function () {

                this.state.start('PreloadState');
            }
        };

        return BootState;
    }());
    return BootState;
});