import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr(),
  description: DS.attr(),
  type: DS.attr(),
  price: DS.attr(),
  image1: DS.attr()
});
