import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Accounts.onCreateUser((options, user) => {
  user.roles = ['borrower']; // default role
  return user;
});

Accounts.onLogin((info) => {
  const user = info.user;
  if (Roles.userIsInRole(user, 'admin')) {
    // Perform admin-specific login actions
  }
});
