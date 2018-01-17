Template.AudioStreamSmart.onCreated( function(){
     this.getAudioTitle = () => FlowRouter.getParam('audioTitle');
     this.autorun( () => {
     this.subscribe('audioStream', this.getAudioTitle());
   });
});


Template.AudioStreamSmart.helpers({
  audioContext: function(){
    const instance = Template.instance();
    const audioTitle = instance.getAudioTitle();
    return Audio.findOne(audioTitle) ? [audioTitle] : [];
  },
  audioArgs: function(audioTitle){
   return Audio.findOne(audioTitle);
  }
});
