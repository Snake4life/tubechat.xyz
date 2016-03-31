import {Models} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('models.list', function (filter, options) {
        return Models.find(filter || {}, options || {});
    });

    Meteor.publish('models.single', function (username) {
        check(username, String);
        return Models.find({username : username});
    });
}
