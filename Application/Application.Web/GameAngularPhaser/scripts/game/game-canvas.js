angular.module('app.game')
.directive('gameCanvas', function () {
    var linkFn = function (scope, ele, attrs) {
        // Link Function

    };
        return {
            scope: {
                players: '=',
                mapId: '='
            },
            template: '<div id="gameCanvas"></div>',
            link: linkFn
        }
    });