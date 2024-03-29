/**
 * Booter Index
 */
var fs = require('fs');

module.exports = function (app) {
	var name;
	fs.readdirSync(__dirname).forEach(function (file) {
		if (file === 'index.js' || file.indexOf('.js') === -1) return;
		var name =  file.replace(/\.js$/, '');
		if (name) {
			require('./' + name)(app);
		}
	});
};