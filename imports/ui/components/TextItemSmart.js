
Template.TextItemSmart.helpers({
textTitleArray() {
const instance = Template.instance();
const textTitle = instance.getTextTitle();
return Texts.findOne(textTitle) ? [textTitle] :[];
},
textArgs (textTitle) {
  const instance = Template.instance();
  return {
    Texts.findOne(textTitle);
  }
}

});
