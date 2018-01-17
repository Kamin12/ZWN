import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Videos } from '../Video.js';



Meteor.publish('videoStream', function (videoTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Videos.findOne({videoTitle}, {
      fields: {
        videomember: 1,
        videomembers: 1,
        videotitle: 1,
        videodate: 1,
        videotext: 1
     }
    });
});


Meteor.publish('videoFeed', function (imageTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Videos.findOne({imageTitle}, {
    fields: {
      imagemember: 1,
      imagemembers: 1,
      imagetitle: 1,
      imagedate: 1,
      imagetext: 1
    }
  });
});
