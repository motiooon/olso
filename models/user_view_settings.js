
var _ = require('underscore');

module.exports = function (app) {

	// this is to be able to embed comments in the User_View_Settings
	var Comment    = require("./comment.js")(app);

	// CONSTANTS
	var cons = {

			// Model name
			MODEL_NAME: 'User_View_Settings',

			// Write only fields
			WRITE_FIELDS: [],

			// Read only fields
			READ_FIELDS: ['text', 'cid','pos_x', 'pos_y', 'width', 'height', /*'an_inner_height', 'an_comments_width', 'text_area_width', 'text_area_height',*/ 'associated_flow',  'User_View_Settings_index', 'User_View_Settings_css_id' , 'User_View_Settings_creator', 'created', 'last_modified'],

			// Valid sort fields
			SORT_FIELDS: ['text', 'created', 'last_modified'],

			// Fields to query on
			QUERY_FIELDS: ['text', 'pos_x', 'cid', 'pos_y', 'associated_flow',  'User_View_Settings_index', 'User_View_Settings_css_id', 'User_View_Settings_creator' , 'created', 'last_modified']

		},

		User_View_SettingsSchema = new app.db.Schema({
			last_app_used       : {type: String},
			active_date_start   : {type: Date},
			active_date_end     : {type: Date},
			created             : { type: Date, 'default': Date.now },
			last_modified       : { type: Date, 'default': Date.now }
		});

	// PROTOTYPE METHODS
	User_View_SettingsSchema.methods.someMethod = function (argument) {
		//here would add some extra methods for a model, other than what mongoose offers.
	};

	return _.extend(app.db.model(cons.MODEL_NAME, User_View_SettingsSchema), cons);
};