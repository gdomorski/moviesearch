var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    this.input = new InputView({
      collection: this.collection
    });

    this.reviewList = new ReviewListView({
      collection: this.collection
    });

    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.reviewList.$el
    ]);

    return this;
  }

});
