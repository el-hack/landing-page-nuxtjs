
<template>
 <div :class="open ? 'bg-white border-none shadow-md p-6 transition-all duration-500 ease-in-out ' :'bg-[#FAFAFA] border border-[#E7EBEE] p-6 transition-all duration-500 ease-in-out'">
   <div class="flex space-x-4 items-center cursor-pointer mb-2" @click="open = !open">
     <Icon v-if="!open" name="uil:plus" color="black" class="md:text-5xl text-3xl"/>
     <Icon v-if="open" name="uil:minus" color="red" class="md:text-5xl text-2xl"/>
     <p class="md:text-2xl text-xl font-bold">{{ data.question }}</p>
   </div>
   <p v-if="open">{{ data.answer }}</p>
 </div>
</template>

<script setup lang="ts">

import type {FaqDataType} from "@/data/faq-data.ts";

type Props = {
  data: FaqDataType,
  indexId:number
}
const props = defineProps<Props>()

const open = ref(false)



</script>
