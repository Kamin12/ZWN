import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './TextStreamReusable.html';



Template.StreamTextReusable.onCreated(function () {
  this.autorun(() => {
    new SimpleSchema({
      texttext: {type: String},
      texttitle: {type: String},
      textmedia: {type: Object},
      textdate: {type: Date},
    }).validate(Template.currentData());
  });




    Template.StreamTextReusable.helpers({
      textContext: function(){
        const instance = Template.instance();
        const textTitle = instance.getTextTitle();
        return Texts.findOne(textTitle) ? [textTitle] : [];
      },
      textArgs: function(videoTitle){
      return Texts.findOne(textTitle);
      }
    });
