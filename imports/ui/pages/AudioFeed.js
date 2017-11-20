Template.AudioFeed.helpers({


audioArgs(audioTitle) {

const instance = Template.instance();
var audioTitle = instance.getaudioTitle();

   return {
     audio(){
       return Audio.findOne(audioTitle);
     }
   }
 },

 tracks() {
   return Audio.find();
 }


});
