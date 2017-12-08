import DS from 'ember-data';
import config from '../config/environment'

export default  DS.RESTAdapter.extend({
  //utilizando o host declarado no environment
  host: config.APP.host,
  headers: {
      'Content-Type': 'application/json'
  }
});
