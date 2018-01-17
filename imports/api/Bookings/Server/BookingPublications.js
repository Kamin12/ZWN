Meteor.publish('bookingsStream', function (textTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Bookings.findOne({textTitle}, {
    fields: {
      textmember: 1,
      textmembers: 1,
      texttitle: 1,
      textdate: 1,
      texttext: 1
    }
  });
});

Meteor.publish('bookingsFeed', function (productTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Bookings.findOne({textTitle}, {
      fields: {
        textmember: 1,
        texttitle: 1,
        textdate: 1,
        texttext: 1
      }
    });
 });
