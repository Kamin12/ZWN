import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ProductItemReusable.html';

Template.ProductItemReusable.helpers({
  pathforProductStream: function (){
    var product = this;
    var params = {
      product : product.producttitle
    };
    var channel = "product";
    var path = FlowRouter.path(channel, params);
    return path;
  }
});


  Template.ProductItemReusable.onCreated( function(){
     this.getVideoTitle = () => FlowRouter.getParam('vtitle');
     this.autorun( () => {
       this.subscribe('videoStream', this.getVideoTitle());
     });
  });






Template.ProductItemReusable.events ({
  'click #buydarkfeed' (event, template) {
   var item = this;
   Session.set('selectedItem', 'this.title');
   Blaze.render(Template.paymentModal, document.body);
   }
});

Template.ProductItemReusable.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema({
      productmember: { type: String },
      producttitle: { type: String },
      productimage: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });
});
