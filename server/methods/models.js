import {Models} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
	Meteor.methods({
		'models.offlines'(){
			Models.update({}, {$set: {is_online: false}}, {multi: true});
		},
		'models.import'(model) {
			let recorded = (model.recorded === "true");
			model = {...model, is_online: true, recorded : recorded};
			Models.upsert({username: model.username}, {
				$set: model
			});
		}
	});
}
