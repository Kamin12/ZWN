import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './VideoStreamReusable.html';

Template.VideoStreamReusable.onCreated(function videoStreamOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
      videotext: {type: String},
      videotitle: {type: String},
      videovideo: {type: Object},
      videoimage: {type: Object},
      videodate: {type: Date},
    }).validate(Template.currentData());
  });
