import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: '_id',
    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
      return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
    },
    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
      return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
    },
    normalizeSaveResponse: function(store, primaryModelClass, payload, id, requestType) {
     return this.normalizeSingleResponse(...arguments);
   },
   normalizeCreateRecordResponse: function(store, primaryModelClass, payload) {
     this.set('friend', payload.friend)
     return {
      data: {
        sucess: payload.sucess,
        friend: payload.friend
        }
      }
    },
   normalizeUpdateRecordResponse: function(store, primaryModelClass, payload, requestType) {
     console.log(payload);
    return this.normalizeSaveResponse(...arguments);
  }
});
