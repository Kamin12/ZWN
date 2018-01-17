Template.StreamImageSmart.onCreated( function(){
     this.getImageTitle = () => FlowRouter.getParam('imageTitle');
     this.autorun( () => {
     this.subscribe('imageStream', this.getImageTitle());
   });
});


Template.StreamImageSmart.helpers({
  imageContext: function(){
    const instance = Template.instance();
    const imageTitle = instance.getImageTitle();
    return Images.findOne(imageTitle) ? [imageTitle] : [];
  },
  imageArgs: function(imageTitle){
  return Images.findOne(imageTitle);
  }
});
