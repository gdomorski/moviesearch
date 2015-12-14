var ReviewEntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<h1> <a href="<%= reviewLink %>"><%= headline %></a></h1><%= image %><p>Review by <%= byline %><p><%= summary %></p>'),

  events: {
    'click': 'startSearch'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var enterReview = this.template({
      headline: this.model.get('headline'),
      image: this.model.get('image'),
      byline: this.model.get('byline'),
      summary: this.model.get('summary'),
      reviewLink: this.model.get('reviewLink')
    });

    this.$el.html(enterReview);
  },

  startSearch: function() {

    this.model.search();

  }

});
