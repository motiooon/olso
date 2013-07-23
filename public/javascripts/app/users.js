require(['/javascripts/app/app.js'], function(App) {

	App.UsersPage = (function(){

		var init = function(){
			initializa_datepicker();
		};

		var initializa_datepicker = function(){
			$('#dp4').datepicker()
				.on('changeDate', function(e){
					var y = e.date.getFullYear(),
						_m = e.date.getMonth() + 1,
						m = (_m > 9 ? _m : '0'+_m),
						_d = e.date.getDate(),
						d = (_d > 9 ? _d : '0'+_d);
					$(this).text(y + '-' + m + '-' + d);
				});
			$('#dp5').datepicker()
				.on('changeDate', function(e){
					var y = e.date.getFullYear(),
						_m = e.date.getMonth() + 1,
						m = (_m > 9 ? _m : '0'+_m),
						_d = e.date.getDate(),
						d = (_d > 9 ? _d : '0'+_d);
					$(this).text(y + '-' + m + '-' + d);
				});
		}

		return {
			init: init
		}

	})();


	$(function(){
		App.UsersPage.init();
	});

});