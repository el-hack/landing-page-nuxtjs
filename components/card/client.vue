<script setup lang="ts">

type Props = {
  client: {
    imageSrc: string
    alt: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="shadow px-6 py-6 md:w-[300px] w-[180px] bg-white rounded flex justify-center">
    <img :src="client.imageSrc" :alt="client.alt" class="md:h-[50px] h-[27px] object-cover">
  </div>
</template>

