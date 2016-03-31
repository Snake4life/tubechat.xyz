import {Girls} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
	Meteor.methods({
		'girls.offlines'(){
			Girls.update({}, {$set: {is_online: false}}, {multi: true});
		},
		'girls.import'(girl) {
			let recorded = (girl.recorded === "true");
			girl = {...girl, is_online: true, recorded : recorded};
			Girls.upsert({username: girl.username}, {
				$set: girl
			});
		}
	});
}
