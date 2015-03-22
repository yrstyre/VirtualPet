define(['jquery', 'knockout', 'underscore', 'app/Pet'], function ($, ko, _, Pet) {
	'use script';

	function Game () {
		this.pet = ko.observable();
		this.petName = ko.observable();
		this.gameIsOn = ko.observable(false);
		this.currentLife = ko.observable(100);
		this.isInAction = ko.observable(false);
		this.actions = ko.observableArray(['love', 'feed', 'play']);

		this.countDown = null;
	}

	Game.prototype = _.extend(Game.prototype, {
		createNewPet: function () {
			var self = this;
			var petName = this.petName() ? this.petName() : "Nameless";
			this.pet(new Pet());
			this.gameIsOn(true);
			this.startCountDown(self);
			this.petName(petName);
		},
		reloadPage: function () {
			location.reload();
		},
		shortenLife: function (self) {
			self.currentLife(self.currentLife() - 10);
			if(this.currentLife() === 0) {
				this.gameOver();
			}			
		},
		raiseLife: function () {
			if(this.currentLife() < 100) {
				this.currentLife(this.currentLife() + 10);
			}		
		},
		setAction: function (action) {
			var self = this;
			var $wrapper = $('.game-wrapper');

			this.raiseLife();		
			$wrapper.find('.action').addClass(action);
			this.isInAction(true);
			setTimeout(function () {
				self.isInAction(false);
				$('.action').removeClass(action);
			}, 1.7 * 1000);
		},
		startCountDown: function (self) {
			this.countDown = setInterval(function() {
				if(self.currentLife() > 0) {
					self.shortenLife(self);
				}
				
			}, 2 * 1000);
		},
		gameOver: function () {
			clearInterval(this.countDown);
			this.gameIsOn(false);
		}
	});

	return Game;
});