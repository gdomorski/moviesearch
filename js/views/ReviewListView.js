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

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
  }


});
