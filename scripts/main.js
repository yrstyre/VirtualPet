requirejs.config({
	basePath: './',
    paths: {
    	knockout: 'libs/knockout/dist/knockout',
    	jquery: 'libs/jquery/dist/jquery',
    	underscore: 'libs/underscore/underscore'
    }
});

define(['app/Game', 'knockout'], function (Game, ko) {
	var game = new Game();
	ko.applyBindings(game);
});