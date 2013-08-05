define(['jquery', 'underscore', 'backbone', 'text!../../../templates/messageView.html'],

	function($, _, Backbone, viewTemplate){
		var MessageView = Backbone.View.extend({

			className: 'message',

			events: {
				'click .message-close': 'close'
			},

			options: {
				type: 'plain',
				title: '',
				body: '',
				showLoadingIndicator: false,
				showCloseButton: false
			},

			initialize: function(){
				this.template = viewTemplate;
				this.render();
			},

			render: function(){

				var _this = this;

				var html = _.template(this.template, this.options);

				this.$el
					.addClass('message-' + this.options.type)
					.html(html);

				setTimeout(function(){
					_this.$el.addClass('message-active');
				}, 250);
			},

			close: function(e){
				if(e){
					e.preventDefault();
				}

				var _this = this;

				this.$el.removeClass('message-active');

				setTimeout(function(){
					_this.remove();
				}, 500);
			}

		});

		return MessageView;
	}
);