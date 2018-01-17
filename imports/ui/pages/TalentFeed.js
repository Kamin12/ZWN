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



Template.TalentFeed.helpers({

bookings(){


},
events(){

},
bookingArgs(bookingTitle) {

const instance = Template.instance();
var textTitle = instance.getTextTitle();

   return {
     text(){
       return Texts.findOne(textTitle);
     }
   }
 },
 eventsArgs(eventsTitle) {

 const instance = Template.instance();
 var textTitle = instance.getTextTitle();

    return {
      text(){
        return Texts.findOne(textTitle);
      }
    }
  }




});

Template.TalentFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('talentFeed', this.getTalentFeed());
   });
});

}
