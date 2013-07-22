var DetailView = Backbone.View.extend({

	id: 'app-detail-view',
	className: 'l-details',

	model: null,

	initialize: function(){
		this.render();
	},

	render: function(){

		var _this = this;

		this.$el.html(this.model.get('content'));

		$('#app-main').append(this.$el);


		setTimeout(function(){
			_this.$el.addClass('is-visible');
		}, 250);

	}

});