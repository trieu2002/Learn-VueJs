<template>
    <div>
      <input v-validate required />
      <button v-validate @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  const validateDirective = {
    updated(el, binding) {
        console.log('el',el,"binding",binding);
      if (binding.value && el.value.trim() === '') {
        el.classList.add('invalid');
      } else {
        el.classList.remove('invalid');
      }
    }
  };
  
  export default {
    directives: {
      validate: validateDirective
    },
    methods: {
      submitForm() {
        // Logic xử lý form
      }
    }
  };
  </script>
  