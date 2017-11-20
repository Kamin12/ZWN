Template.StreamProductMain.onCreated(function StreamProductOnCreated() {


  this.mainimageconsole = new ReactiveVar( '{{product.imageone}}' );

  this.leftarrow = new ReactiveVar( 'slideshowarrowone' );

  this.rightarrow = new ReactiveVar( 'slideshowarrowtwo' );

  this.productArgue = new ReactiveDict();

  this.productArgue.setDefault({
    editing: false,
    purchased: false,
    commented: false

  });

  this.getproductTitle = () => FlowRouter.getParam( 'producttitle' );
  const prodTitle = instance.getproductTitle();


  this.autorun(() => {
  this.subscribe( 'productStream' , this.getproductTitle());
});


});

Template.StreamProductMain.helpers({

productTitleArray(){
const instance = Template.instance();
const prodTitle = instance.getproductTitle();
return Products.findOne(prodTitle);
},

prodArgs(prodTitle){
  const instance = Template.instance();
  const product = Products.findOne(prodTitle);
}

});
