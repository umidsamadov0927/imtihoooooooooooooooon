//chatgpt 70% yordam berdi ulgirmadim 45% uzm yozdim
<template>
  <div v-for="(item, index) in data" :key="index" class="flex flex-col items-center">
    <div @click="open(index)" class="cursor-pointer bg-gray-200 px-3 py-1 rounded">
      {{ item.name }}
    </div>
    <p v-if="openedIndex === index">{{ item.email }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

let data = [
  { name: "John", email: "john@gmail.com", password: "123456" },
  { name: "Johan", email: "johan@gmail.com", password: "123456" },
  { name: "Johan-Medium", email: "medium@gmail.com", password: "123456" }
];

let openedIndex = ref(null);

function open(index)
  openedIndex.value = openedIndex.value === index ? null : index;
}
</script>
