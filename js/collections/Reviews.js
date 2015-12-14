var Reviews = Backbone.Collection.extend({
	
	model: ReviewEntry,

	addReviewEntry: function(searchterm){
		$.get('http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + searchterm + '&api-key=35048fb638af56ae3350ee9a8080d836:10:73752819',
		function(data) {
			for(var i = 0; i < data.results.length; i++){
				if(data.results[i].multimedia !== undefined){
					var results = data.results[i]
					this.add({
							headline: results.display_title,
							image: '<img src="' + results.multimedia.resource.src + '"></img>',
							byline: results.byline,
							summary: results.summary_short,
							reviewLink: results.link.url
					});
				}
		  }
			}.bind(this)
		);
	}
});