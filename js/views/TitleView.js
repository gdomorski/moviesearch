var TitleView = Backbone.View.extend({

  el: '<h1 class="hideme">',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.text('Movie Review Search Database');
    return this
  }

});
