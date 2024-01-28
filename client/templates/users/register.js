import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.register.events({
  'submit #register-form': function(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;

    Accounts.createUser({
      email: email,
      password: password,
    }, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        // Redirect user or show success message
      }
    });
  }
});
