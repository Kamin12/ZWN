Template.WreadAbout.events({
  "click .closeyou1" (event, template) {
    var modal3z = $('.modal-contentyou0');
    modal3z.css('display', 'none');
    Blaze.remove(template.view);
  }
});

Template.WreadAbout.onRendered(function(){
  Meteor.setTimeout(() => {
    var modal512 = $('#myyyModal1');
    modal512.css('display', 'block');
  }, 500);
});
