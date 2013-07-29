require(['/javascripts/app/app.js'], function(App) {

	App.UsersPage = (function(){

		var start, end;

		var init = function(){
			initialize_datepicker();
		};


		var getDataForSelected = function(start, end){

			var req = $.ajax({
				url: "/users",
				data: {start: start, end: end }
			});

			req.done(function(data) { console.log(data) })
			req.fail(function() { console.log("error with gettting data"); })

		};


		var initialize_datepicker = function(){
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