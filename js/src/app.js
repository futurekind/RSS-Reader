require.config({

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	},

	paths: {
		jquery: '../vendor/jquery-1.10.2.min',
		underscore: '../vendor/underscore.min',
		backbone: '../vendor/backbone.1.0.0.min'
	},

	namespace: 'App'
});

require([
	'views/AppView'
], function(AppView){
	var app = new AppView();
	app.render();
});

// App.appView = new AppView();
// App.appView.checkForUsernameAndPassword();