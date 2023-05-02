<template>
    <div>
      <h1>{{ title }}</h1>
      <slot name="content"></slot>
      <p>{{ footer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    props: {
      title: {
        type: String,
        required: true
      },
      footer: {
        type: String,
        default: 'Footer'
      }
    }
  }
  </script>
  