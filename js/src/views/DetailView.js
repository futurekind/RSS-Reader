var DetailView = Backbone.View.extend({

	id: 'app-detail-view',
	className: 'l-details',

	events: {
		'click .article-close': 'close'
	},

	model: null,

	initialize: function(){
		this.template = App.loadTemplate('templates/detailView.html');
		this.render();
	},

	render: function(){

		var _this = this;

		this.$el.html(_.template(this.template, this.model));

		$('#app-main').append(this.$el);


		setTimeout(function(){
			_this.$el.addClass('is-visible');
		}, 250);

	},

	close: function(e){
		e.preventDefault();

		var _this = this;

		this.$el.removeClass('is-visible');

		setTimeout(function(){
			_this.remove();
		}, 500);
	}

});