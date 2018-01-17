if (Meteor.isClient) {

  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import { Products } from '../../api/products/products.js';

  import './Market.html';
  import '../../api/Products/Server/ProductsPublications.js';
  import '../../api/Products/Products.js';


  // Components used inside the template

  import '../components/ProductItemSmart.js';
  import '../components/ProductItemSmart.html';


Template.ImageFeed.helpers({
images(){
return Images.find()
}
});


Template.ImageFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('imageFeed', this.getImageFeed());
   });
});

}
