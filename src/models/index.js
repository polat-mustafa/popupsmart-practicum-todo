class User {
    constructor(name) {
        this.name = name;
    }
}

class TodoList {

    todos = [
        {
            content: 'hey',
            isCompleted: false,
            id: 1
        },
        {
            content: 'hello',
            isCompleted: false,
            id: 2
        }
    ]

    addTodo() {
        this.todos.push(this.body)
    }
    deleteTodo(body) {
        this.todos = this.todos.filter(todo => todo.id !== body.id)
    }
    updateTodo(body) {
        this.todos = this.todos.map(todo => todo.id === body.id ? body : todo)
    }
    getTodoById(body) {
        return this.todos.find(todo => todo.id === body.id)
    }
    getTodos() {
        return this.todos
    }

    constructor(body) {
        this.body = body
    }

}


class Todos {

    content = ''
    isCompleted = false
    id = 0

    constructor(content, isCompleted, id) {
        this.content = content
        this.isCompleted = isCompleted
        this.id = id
    }


}

const polat = new User('polat')

const todos1 = new Todos('todo1', false, 1)

const todoList = new TodoList(todos1)

todoList.getTodos()
todoList.addTodo()

console.log(polat)
console.log(todoList)
console.log(todos1)


