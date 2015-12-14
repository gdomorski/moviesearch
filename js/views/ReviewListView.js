var ReviewListView = Backbone.View.extend({

  id: 'list',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.$el.empty();

  	this.entries = this.collection.models.map(function(model) {
      return new ReviewEntryView({
        model: model
      });
    });

    var $allReviews = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($allReviews);

    return this;
  }


});
