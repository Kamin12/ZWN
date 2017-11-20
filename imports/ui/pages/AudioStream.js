Template.StreamAudio.onCreated( function(){
     this.getAudioTitle = () => FlowRouter.getParam('audioTitle');
     this.autorun( () => {
     this.subscribe('audioStream', this.getAudioTitle());
   });
});


Template.StreamAudio.helpers({
  audioContext: function(){
    const instance = Template.instance();
    const audioTitle = instance.getAudioTitle();
    return Audio.findOne(audioTitle) ? [audioTitle] : [];
  },
  audioArgs: function(audioTitle){
   return Audio.findOne(audioTitle);
  }
});


Template.StreamAudio.helpers{(
  Liked: function(){
   if (!Likedby.indexOf({{this.MemberName, -1}})) {
     return 'red';
   }  else {
     return 'white';
   }
 },
 Bought: function(){
  if (!Boughtby.indexOf({{this.MemberName, -1}})) {
    return 'red';
  }  else {
    return 'white';
  }
},
Saved: function(){
 if (!Savedby.indexOf({{this.MemberName, -1}})) {
   return 'red';
 }  else {
   return 'white';
 }
},
Shared: function(){
 if (!Sharedby.indexOf({{this.MemberName, -1}})) {
   return 'red';
 }  else {
   return 'white';
 }
}
)};
