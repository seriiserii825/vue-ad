export default {
  state: {
    todos: [
      {id: 1, title: 'some', done: false},
      {id: 2, title: 'second', done: false},
      {id: 3, title: 'third', done: false},
      {id: 4, title: 'four', done: false},
      {id: 5, title: 'fifth', done: false}
    ]
  },
  getters: {
    todos (state) {
      return state.todos
    }
  }
}
