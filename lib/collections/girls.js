import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';


const Girls = new Mongo.Collection('girls');

let schema = new SimpleSchema({
	username: {
		type: String,
		unique: true,
		label: 'Username',
		max: 111
	},
	age : {
		type : Number,
		optional : true
	},
	display_name: {
		type: String,
		optional: true
	},
	gender: {
		type: String
	},
	birthday: {
		type: Date,
		optional: true
	},
	location : {
		type : String,
		optional : true
	},
	room_subject: {
		type: String,
		label: 'Room',
		optional : true
	},
	is_hd: {
		type: Boolean
	},
	is_new: {
		type: Boolean
	},
	recorded: {
		type: Boolean
	},
	current_show: {
		type: String
	},
	tags: {
		type: [String],
		optional: true
	},
	chat_room_url: {
		type: String
	},
	image_url: {
		type: String
	},
	image_url_360x270: {
		type: String
	},
	block_from_states: {
		type: String,
		optional: true
	},
	block_from_countries: {
		type: String,
		optional: true
	},
	iframe_embed : {
		type : String
	},
	iframe_embed_revshare : {
		type : String
	},
	seconds_online: {
		type: Number
	},
	num_users : {
		type : Number
	},
	num_followers : {
		type : Number
	},
	is_online : {
		type : Boolean
	}
});

Girls.attachSchema(schema);

export default Girls;
