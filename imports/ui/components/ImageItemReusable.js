import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ImageItemReusable.html';

Template.ImageItemReusable.helpers({
pathforImageStream: function (){
  var image = this;
  var params = {
    image : image.imagetitle
  };
  var channel = "images";
  var path = FlowRouter.path(channel, params);
  return path;
}
});

Template.ImageItemReusable.events({
  'click #showlove ':function(){

  },
  'click #save':function(){
session.set
Meteor.call
  },
});



  Template.ImageItemReusable.onCreated(function imageShowOnCreated() {


    this.autorun(() => {
      new SimpleSchema({
        imagemember: { type: String },
        imagetitle: { type: String },
        imageimage: { type: Mongo.Cursor },
      }).validate(Template.currentData());
    });

});
