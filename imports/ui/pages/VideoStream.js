Template.VideoStreamSmart.onCreated( function(){
   this.getVideoTitle = () => FlowRouter.getParam('vtitle');
   this.autorun( () => {
     this.subscribe('videoStream', this.getVideoTitle());
   });
});

Template.VideoStreamSmart.helpers({
  videoContext: function(){
    const instance = Template.instance();
    const videoTitle = instance.getVideoTitle();
    return Video.findOne(videoTitle) ? [videoTitle] : [];
  },
  videoArgs: function(videoTitle){
  return Videos.findOne(videoTitle);
  }
});
