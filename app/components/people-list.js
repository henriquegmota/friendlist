import Component from '@ember/component';

export default Component.extend({
  //adicionando uma queryParams de name par utilização
  queryParams: {
        name: {
          refreshModel: true
        }
      },
  //retorno da lista pela API
  model: function(params) {
        return this.store.query('friend', params);
      }
});
