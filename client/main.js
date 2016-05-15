import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

AllTasks = new Mongo.Collection('tasks')
Template.body.helpers({
    tasks: function() {
        return AllTasks.find();
    }
});
Template.task.events({
    'click .delete'(){
        AllTasks.remove(this._id);
    }
});
Template.body.events({
    'submit .formTasks'(event) {
        var title = event.target.title.value;
        AllTasks.insert({
            title: title,
            createdAt: new Date()
        });
        event.target.title.value = "";
        return false;
    },
});
