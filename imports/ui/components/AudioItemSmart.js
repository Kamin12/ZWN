


Template.AudioItemSmart.helpers({
audioTitleArray() {
const instance = Template.instance();
const audioTitle = instance.getAudioTitle();
return Audio.findOne(audioTitle) ? [audioTitle] :[];
},
audioArgs (audioTitle) {
  const instance = Template.instance();
  return {
    Audio.findOne(audioTitle);
  }
}

});
