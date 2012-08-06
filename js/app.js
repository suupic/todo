// 模型
Todo = Em.Object.extend({
  text: null,
  isDone: false,
  changeStatus: function(){
    if (this.isDone == false){
      this.set('isDone',true)
    }
    else{
      this.set('isDone',false)
    }
  }
});

var App = Em.Application.create({
	name: 'TODO'
});

TodosController = Em.ArrayController.create({
  content: [],
  init: function(){
    },
  add: function(text){
		var todo = Todo.create({
      text: text
    })
    this.pushObject(todo);
  }
});

TodosView = Em.View.extend({
  add: function(event){
    var myDate = new Date();
    text = myDate.getMinutes() +':'+ myDate.getSeconds();
    TodosController.add(text);
  },
  done: function(){
    console.log(event.target);
    var todo = this.get('context');
    console.log(this);
    console.log(this.get( 'content' ));
  },
  todoBinding: 'TodosController.content'
});
