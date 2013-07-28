module.exports = {
	name : "production",
	"mongodb":{
		"host" : "mongodb://localhost/customer_analytics_prod",
     port: "333"
	},
	"redis":{
		host: "127.0.0.1",
		port: "3242"
	}
};