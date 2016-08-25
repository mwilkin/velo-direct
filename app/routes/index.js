import Ember from 'ember';

var items = [{
  id: 1,
  brand: "Easton Cycling",
  description: "EC90SL",
  type: "crankset",
  price: 400.00,
  image1: "https://www.eastoncycling.com/media/EC90-SL-crankset-straight.png"
},{
  id: 2,
  brand: "Easton Cycling",
  description: "Direct Mount",
  type: "Chaing rings",
  price: 100.00,
  image1: "https://www.eastoncycling.com/media/DM_Chainrings.png"
},{
  id: 3,
  brand: "Brooks England",
  description: "Cambium C13",
  type: "Chaing rings",
  price: 220.00,
  image1: "http://www.brooksengland.com/media/catalog/product/cache/0/image/1000x625/602f0fa2c1f0d1ba5e241f914e856ff9/c/a/cambium-c13_1.jpg"
}, {
  id: 4,
  brand: "Garmin",
  description: "Edge 520",
  type: "Cycling GPS",
  price: 299.99,
  image1: "https://static.garmincdn.com/en/products/010-01368-00/g/cf-lg.jpg"
}];

export default Ember.Route.extend({
  model (){
    return items;
  },
});
