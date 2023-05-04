<!-- Component con -->
<template>
  <div>
    <h2>Component Con</h2>
    <slot :message="message" :handleClick="handleClick"></slot>
  </div>
</template>

<script>
export default {
  name: 'ComponentCon',
  methods: {
    handleClick() {
      alert('Button clicked in component con');
    }
  }
}
</script>