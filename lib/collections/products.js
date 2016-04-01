import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';


const Products = new Mongo.Collection('products');

let schema = new SimpleSchema({
	productId : {
		type : Number,
		unique : true
	},
	productTitle : {
		type : String
	},
	productUrl : {
		type : String
	},
	promotionUrl : {
		type : String,
		optional : true
	},
	imageUrl : {
		type : String
	},
	originalPrice : {
		type : String
	},
	salePrice : {
		type : String,
		optional : true
	},
	discount : {
		type : String,
		optional : true
	},
	trackingId : {
		type : String,
		optional : true
	},
	updatedAt : {
		type : Date,
		autoValue : function(){
			return new Date();
		}
	}
});

Products.attachSchema(schema);

export default Products;
