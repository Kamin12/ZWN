Template.VideoFeed.helpers({


videoArgs(videoTitle) {

const instance = Template.instance();
var videoTitle = instance.getVideoTitle();

   return {
     video(){
       return Videos.findOne(videoTitle);
     }
   }
 },

 videos() {
   return Videos.find();
 }


});
