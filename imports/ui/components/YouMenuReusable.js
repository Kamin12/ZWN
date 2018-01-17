
Template.YouMenu.events({
  "click .closeyou" (event, template) {
    var modal3 = $('.modal-content');
    modal3.css('display', 'none');
    Blaze.remove(Template.instance().view);
  },
  'click #logout2' (event, template){
         Meteor.logout();
         Router.go('/sign-in');
  }
});

Template.YouMenu.onRendered(function(){
  Meteor.setTimeout(() => {
    var modal511 = $('#myyyModal');
    modal511.css('display', 'block');
  }, 500);
});

Template.YouMenu.Helpers({
 NotLoggedIn() {
    if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
 }

})
