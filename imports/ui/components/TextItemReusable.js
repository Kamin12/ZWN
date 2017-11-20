import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './TextItemReusable.html';

Template.TextItem.helpers({
pathforTextStream: function (){
  var text = this;
  var params = {
    title : text.texttitle
  };
  var channel = "texts";
  var path = FlowRouter.path(channel, params);
  return path;
}
});

Template.TextItemReusable.onCreated(function () {
  this.autorun(() => {
    new SimpleSchema({
      texttext: {type: String},
      texttitle: {type: String},
      textmedia: {type: Object},
      textdate: {type: Date},
    }).validate(Template.currentData());
  });
