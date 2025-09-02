<template>
  <div v-for="item in data" :key="item.id" class="flex items-center justify-center">

  </div>
</template>
<script setup>
let data = [
  {
    name: "John",
    email: "john@gmail.com",
    password: "123456",
  },
  {
    name: "Johan",
    email: "john@gmail.com",
    password: "123456",
  },
  {
    name: "Johan-Medium",
    email: "john@gmail.com",
    password: "123456",
  }
]
</script>