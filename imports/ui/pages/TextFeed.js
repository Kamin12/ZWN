Template.TextFeed.helpers({


textArgs(textTitle) {

const instance = Template.instance();
var textTitle = instance.getTextTitle();

   return {
     text(){
       return Texts.findOne(textTitle);
     }
   }
 },

 texts() {
   return Texts.find();
 }


});
