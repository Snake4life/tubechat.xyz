import {Girls} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('girlsByGender', function (gender) {
    return Girls.find({gender : gender});
  });
}
