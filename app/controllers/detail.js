import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
        goHome: function() {
          this.transitionToRoute('home');
        }
    }
});
