var tags = new Meteor.Collection("tags")

if (Meteor.isClient) {
  Template.tags.tags = function () {
    return tags.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
