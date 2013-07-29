
var moment = require("moment");

module.exports = function(app){

  app.get("/users", function(req, res, next){
        res.render("users",{
          title: "Users List",
          start_date: moment().format("YYYY-MM-D"),
          end_date: moment().subtract('days', 30).format("YYYY-MM-D")
        });
  });

};
