var MessageView = Backbone.View.extend({

	events: {
		'click .message-close': 'close'
	},

	options: {
		type: 'plain',
		title: 'This is a message',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
		showLoadingIndicator: false
	},

	initialize: function(){
		this.template = App.loadTemplate('templates/messageView.html');
		this.render();
	},

	render: function(){
		var html = _.template(this.template, this.options);
		App.appView.$el.append(this.$el.html(html));
	},

	close: function(e){
		e.preventDefault();
		this.remove();
	}

});