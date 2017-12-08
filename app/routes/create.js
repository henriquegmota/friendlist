import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
      save (model) {
          let newFriend = this.store.createRecord('friend', model); //criei o registro
          newFriend.save().then(() => {
          }).catch(() => {
           }) //persistindo os dados
         // this.transitionTo('friends');
      }
  },
  model () {
      return {};
  }
});
