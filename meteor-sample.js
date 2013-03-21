var tags = new Meteor.Collection("tags")

if (Meteor.isClient) {
  Template.tags.tags = function () {
    return tags.find();
  };

  Template.tags.events({
    'click .edit': function(e) {
      Session.set('id', e.srcElement.dataset.id);
      $("#my-modal").toggleClass("hidden");
    }
  });

  Template.modal.tag = function() {
    return tags.findOne(Session.get('id'));
  };

  Template.modal.selected = function(text) {
    console.log(text);
  }

  Template.modal.events({
    "click #save": function() {
      var name = $("#name").val();
      tags.update(Session.get('id'), {name: name});
      $("#my-modal").toggleClass("hidden"); 
    },
    "click #cancel": function() {
      $("#my-modal").toggleClass("hidden"); 
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
