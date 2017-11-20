
Template.ImageFeed.helpers({


imageArgs(imageTitle) {

const instance = Template.instance();
var imageTitle = instance.getImageTitle();

   return {
     image(){
       return Images.findOne(imageTitle);
     }
   }
 },

 images() {
   return Images.find();
 }


});
