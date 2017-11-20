import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Products } from '../../api/products/products.js';

import './Market.html';
import '../../api/Products/Server/ProductsPublications.js';
import '../../api/Products/Products.js';


// Components used inside the template

import '../components/ProductItemSmart.js';
import '../components/ProductItemSmart.html';




Template.Market.helpers({


prodArgs(productTitle) {

const instance = Template.instance();
var productTitle = instance.getProductTitle();

   return {
     product(){
       return Products.findOne(productTitle);
     }
   }
 },

 products() {
   return Products.find();
 }


});

Template.Market.onCreated( function(){

const instance = Template.instance();
this.getProductTitle = () => FlowRouter.getParam('producttitle');
var productTitle = this.getProductTitle();


this.productpurchased = new ReactiveVar(false);
this.productliked = new ReactiveVar(false);
this.productcommented = new ReactiveVar(false);
this.creatorfollowing = new Reactivevar(false);

});
