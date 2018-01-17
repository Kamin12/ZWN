import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ProductStreamReusable.html';

    Template.StreamProductMain.onCreated(function listShowOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
    producttext: {type: String},
    producttitle: {type: String},
    productmedia: {type: Object},
    productmember: {type: String},
    productdate: {type: Date},
    productprice: {type: String},
    productshipprice: {type: String},
    productshiptime: {type: String},
    }).validate(Template.currentData());
  });
