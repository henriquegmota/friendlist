import Controller from '@ember/controller';

export default Controller.extend({
  isShowingModal: false,
  actions: {
        save (model) {
            model.set('friend-edit', 'true');
            model.save().then(() => {
                this.transitionToRoute('home');
            }).catch(() => {
               this.transitionToRoute('home');
            //   //alert(error);
             })
        },
        toggleModal: function() {
          this.toggleProperty('isShowingModal');
        },
        goHome: function() {
          this.transitionToRoute('home');
        }
    }
});
