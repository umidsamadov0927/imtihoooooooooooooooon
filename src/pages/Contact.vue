<template>
  <form @submit.prevent="addPost">
    <div class="w-[600px] max-w-7xl mx-auto mt-[20px] grid grid-cols-2 gap-3">
      <input v-model="firstName" type="text"
             class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none"
             placeholder="Enter first name" required>
      <input v-model="lastName" type="text"
             class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none"
             placeholder="Enter last name" required>
      <input v-model="phoneNumber" type="text"
             class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none"
             placeholder="Enter phone number" required>
      <button class="w-[295px] bg-green-500 rounded-[4px] focus:scale-95" type="submit">
        Enter
      </button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue"

let data = ref([])

let firstName = ref("")
let lastName = ref("")
let phoneNumber = ref("")

// // GET
// async function render() {
//   try {
//     let res = await fetch("https://crm-test-api.duckdns.org/api/Leads/public", {
//       method: "GET"
//     })
//     let books = await res.json()
//     // API massiv qaytaradi, results yo‘q
//     data.value = books
//     console.log(books)
//   } catch (error) {
//     console.log(error)
//   }
// }

// POST
async function addPost() {
  try {
    let res = await fetch("https://crm-test-api.duckdns.org/api/Leads/public", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        comment: "home",
        categoryId: 17
      })
    })
    let result = await res.json()
    console.log(result)
    firstName.value = ""
    lastName.value = ""
    phoneNumber.value = ""
  } catch (error) {
    console.log(error)
  }
}


</script>
