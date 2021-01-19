export default {
  state: {
    todos: [
      {
        id: 1,
        title: 'some',
        done: false
      },
      {
        id: 2,
        title: 'second',
        done: false
      },
      {
        id: 3,
        title: 'third',
        done: false
      },
      {
        id: 4,
        title: 'four',
        done: false
      },
      {
        id: 5,
        title: 'fifth',
        done: false
      }
    ],
    term: null
  },
  getters: {
    todos (state) {
      return state.todos
    },
    term (state) {
      return state.term
    }
  },
  mutations: {
    toggleTodo (state, payload) {
      const idx = state.todos.findIndex(item => item.id === payload)
      state.todos[idx].done = !state.todos[idx].done
    },
    addTodo (state, payload) {
      const newItem = {
        id: new Date().getTime(),
        title: payload,
        done: false
      }
      state.todos.push(newItem)
    },
    deleteTodo (state, { id }) {
      const idx = state.todos.findIndex(item => item.id === id)
      state.todos.splice(idx, 1)
    },
    setTerm (state, payload) {
      state.term = payload
    }
  }
}
