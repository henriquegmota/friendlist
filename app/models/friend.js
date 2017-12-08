import DS from 'ember-data';

//Declarar o DS soomente uma vez, para que assim melhore a performance.
const { Model, attr } = DS;

export default DS.Model.extend({
    name: attr('string'),
    lastname: attr('string'),
    friendsSince: attr()
});
