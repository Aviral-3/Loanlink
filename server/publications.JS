import { Meteor } from 'meteor/meteor';
import { Loans } from '/lib/collections/Loans.js';

Meteor.publish('loans', function () {
  return Loans.find({/* criteria */});
});
