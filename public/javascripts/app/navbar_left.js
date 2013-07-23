require(['/javascripts/app/app.js'], function(App) {

App.NavbarLeft = (function(){

	var init = function(){
		$('.selectpicker').selectpicker();
	};

	return {
		init: init
	}

})();


$(function(){
	App.NavbarLeft.init();
});

});