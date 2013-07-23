module.exports.locals = function(req, res, next){
	return function(req, res, next){
		res.locals.env_name = env.name;
		next();
	}
}