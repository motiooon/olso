
module.exports = function(app){

    app.get("/users", function(req, res, next){
	        res.render("users",{
		             title: "Users List"
	        });
    });

};
