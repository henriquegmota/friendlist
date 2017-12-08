import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  queryParams: {
      name: 'nome'
  },
  name: null,
  filteredFriends: Ember.computed('name', 'model', function() {
    let name = this.get('name');
    let friends = this.get('model');

    if (name) {
      return friends.filterBy('name', name);
    } else {
      return friends;
    }
  })
});
