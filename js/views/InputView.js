var InputView = Backbone.View.extend({

  el: '<input class="hideme" style="width: 200px; height: 30px">',

  events: {
    'keydown': 'makeEnterKeyWork',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  makeEnterKeyWork: function(e) {

    var isEnterKey = (e.which === 13);

    if(isEnterKey) { 
      $('.hideme').hide()
      this.collection.addReviewEntry(this.$el.val());
      this.resetInput();
    }
  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Search a movie/actor here'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
