<template>
  <div>
    <h1>Danh sách todos:</h1>
    <form action="" @submit.prevent="handleSubmit">
      <div>
        <label for="">Tên</label>
        <input type="text" v-model="newTodo.name">
      </div>
      <div>
        <label for="">Tuổi</label>
        <input type="text" v-model="newTodo.age">
      </div>
      <button type="submit">{{ id ? "Edit" : "Add" }}</button>
    </form>
    <TodoList :todos="todos" @deleteItem="handleDelete" @editItem="editItem" />
  </div>
</template>

<script>
import TodoList from './components/Todo/Todo.vue';

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: this.getLocalStore('todo') || [
      { id: 1, name: "Trieu", age: 21 },
      { id: 2, name: "An", age: 21 },
      { id: 3, name: "Hung", age: 22 }
    ],
      newTodo: { name: '', age: '' },
      id: null
    };
  },
  
  watch: {
    todos: {
      handler(newTodos) {
        this.saveLocalStore('todo', newTodos);
      },
      deep: true
    }
  },
  methods: {
    saveLocalStore(name, data) {
      localStorage.setItem(name, JSON.stringify(data));
    },
    getLocalStore(name) {
      return JSON.parse(localStorage.getItem(name));
    },
    removeLocalStore(name) {
      localStorage.removeItem(name);
    },
    handleSubmit() {
      const findItem = this.todos.find(item => item.id === this.id);
      if (findItem) {
        findItem.name = this.newTodo.name;
        findItem.age = this.newTodo.age;
        this.newTodo = { name: '', age: '' };
        this.id = null;
      } else {
        this.todos.push({ ...this.newTodo, id: Date.now() });
        this.newTodo = { name: '', age: '' };
      }
    },
    handleDelete(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    editItem(id) {
      const find = this.todos.find(item => item.id == id);
      this.newTodo.name = find.name;
      this.newTodo.age = find.age;
      this.id = id;
    }
  }
}
</script>
