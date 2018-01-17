









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
}

});
