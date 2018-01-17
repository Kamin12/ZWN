import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './VideoItemReusable.html';


Template.VideoItemReusable.helpers({
pathforVideoStream: function (){
  var video = this;
  var params = {
    video : video.videotitle
  };
  var channel = "videos";
  var path = FlowRouter.path(channel, params);
  return path;
}
});

  Template.VideoItemReusable.onCreated(function() {
    this.autorun(() => {
      new SimpleSchema({
        videomember: { type: String },
        videovideo: { type: String },
        videotitle: { type: String },
        videoimage: { type: Mongo.Cursor },
      }).validate(Template.currentData());
    });
});

Template.VideoItemReusable.events({
'click #save'(){

},
'click #showlove'(){

}
});
