

Template.ProductItemSmart.helpers({

productTitleArray() {
const instance = Template.instance();
const productTitle = instance.getProductTitle();
return Products.findOne(productTitle) ? [productTitle] :[];
},
prodArgs (productTitle) {
  const instance = Template.instance();
  return {
    Products.findOne(productTitle);
  }
},
pathforVideoStream: function (){
  var video = this;
  var params = {
    vtitle : video.videotitle
  };
  var channel = "videos";
  var path = FlowRouter.path(channel, params);
  return path;
}
});



Template.ProductItemSmart.onCreated(function(){


});
