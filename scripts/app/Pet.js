define(['knockout', 'underscore'], function (ko, _) {
	'use strict';

	function Pet() {
		var self = this;		
		this.animalList = ['bunny', 'cat', 'hamster'];
		this.animal = this.setAnimal();	
	}

	Pet.prototype = _.extend(Pet.prototype, {
		setAnimal: function () {
			var randomAnimal = this.animalList[Math.floor(Math.random() * this.animalList.length)];
			return randomAnimal;
		}
	});

	return Pet;
});