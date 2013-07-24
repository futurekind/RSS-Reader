var Feed = Backbone.Model.extend({

	defaults: {
		id: 0,
		feed_id: 0,
		title: '',
		url: '',
		author: '',
		source: '',
		content: '',
		summary: '',
		published: '',
		published_formated: '',
		created_at: '',
		read: false
	}

});