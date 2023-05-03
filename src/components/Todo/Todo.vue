<template>
    <div v-if="this.todos.length<0">Loading</div>
    <div v-else>
       <table class="table">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="todo in todos" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.name }}</td>
                    <td>{{ todo.age }}</td>
                    <td>
                        <button @click="handleEdit(todo.id)">Sửa</button>
                        <button @click="handleRemove(todo.id)">Xóa</button>
                    </td>
              </tr>
          </tbody>
       </table>
    </div>   
  </template>
  
  <script>
    export default{
      props: ['todos'],
      methods: {
          handleEdit(id) {
               this.$emit('editItem',id);
          },
          handleRemove(id) {
              this.$emit('deleteItem',id);
          }
      }
    }
  </script>
  