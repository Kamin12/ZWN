
Template.paymentModal.helpers({
pathforitemStream: function (){
  var video = this;
  var params = {
    vtitle : video.videotitle
  };
  var channel = "videos";
  var path = FlowRouter.path(channel, params);
  return path;
}
});
