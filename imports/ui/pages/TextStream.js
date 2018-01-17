Template.StreamText.onCreated( function(){
     this.getTextTitle = () => FlowRouter.getParam('textTitle');
     this.autorun( () => {
     this.subscribe('textStream', this.getTextTitle());
   });
});

Template.StreamText.helpers({
  textContext: function(){
    const instance = Template.instance();
    const textTitle = instance.getTextTitle();
    return Texts.findOne(textTitle) ? [textTitle] : [];
  },
  textArgs: function(textTitle){
  return Texts.findOne(textTitle);
  }
});
