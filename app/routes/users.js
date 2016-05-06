import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			name:    'koti',
			twitter: '@ekanna'
		}, {
			name:   'lucky',
			twitter: '@lucky'
		}, {
			name:   'raj',
			twitter: '@eraj'
		}];
	}

});
