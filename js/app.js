var App = Em.Application.create({
	name: 'TODO'
});

TodosView = Em.View.extend({

  add: function(event){
  	console.log('clicked');
  	TodosController.add();
  },
  done: function(event){
  	console.log(event);
  },
  todoBinding: 'TodosController.content'
});

App.todo = Em.Object.create({
  text: 'eating',
  isDone: false
});

TodosController = Em.ArrayController.create({
  content: [],
  init: function(){
        var todo = App.todo;
        this.pushObject(todo);
    },
  add: function(){
		var todo = App.todo;
        this.pushObject(todo);
  }
});

