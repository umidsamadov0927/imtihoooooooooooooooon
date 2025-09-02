<template>
  <main>
    <section>
      <div class="w-[1300px] flex mx-auto justify-end mt-[30px]">
        <img @click="homeBar" class="w-[40px] h-[40px] cursor-pointer " src="../assets/img/homeBar.png" alt="Home">
      </div>
      <div v-if="hidden" class="w-[500px]bg-white h-[740px] mt-[-70px] absolute z-10">
        <div class="m-8">
          <div class="flex items-center gap-20">
            <p class="text-[35px] font-[700] mb-6">Sahand Ghavidel</p>
            <button @click="exitFuchtion" class="text-[25px] font-[700] text-red-500 mt-[-25px] cursor-pointer">x</button>
          </div>
          <div class="flex grid grid-cols-1 gap-4">
            <router-link to="./" class="font-[500] text-[28px] mt-6 cursor-pointer">Home</router-link>
            <router-link to="./faq" class="font-[500] text-[28px] mt-6 mb-6 cursor-pointer">Faq</router-link>
            <router-link to="./contact" class="font-[500] text-[28px] cursor-pointer">Contact</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import {ref} from "vue";

let hidden = ref(false);
function homeBar () {
hidden.value = true;
}
function exitFuchtion () {
  hidden.value = false;
}
</script>