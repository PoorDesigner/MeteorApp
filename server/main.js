import { Meteor } from 'meteor/meteor';
AllTasks = new Mongo.Collection('tasks');
Meteor.startup(() => {
  // code to run on server at startup
});