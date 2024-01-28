// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Meteor } from 'meteor/meteor';
// import { App } from '/imports/ui/App';

// Meteor.startup(() => {
//   const container = document.getElementById('react-target');
//   const root = createRoot(container);
//   root.render(<App />);
// });

// import { Template } from 'meteor/templating';
// import { Roles } from 'meteor/alanning:roles';

// Template.mainTemplate.helpers({
//   currentUser() {
//     return Meteor.userId();
//   }
// });

// Template.dashboard.helpers({
//   isInRole(role) {
//     return Roles.userIsInRole(Meteor.userId(), role);
//   }
// });


import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Loans } from '/lib/collections/Loans.js';

Template.borrowerDashboard.onCreated(function() {
  this.subscribe('loans');
});

Template.borrowerDashboard.helpers({
  loans() {
    return Loans.find({});
  }
});

