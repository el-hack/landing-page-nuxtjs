<template>
    <button v-if="variant == 'google'" class="flex items-center space-x-2 bg-black py-2 px-4 rounded-lg">
        <img src="/icons/google-play-icon.svg" alt="icon" class="w-[20px]">
        <div class="text-white">
            <p class="text-xs">Télécharger sur</p>
            <p>Google Play</p>
        </div>
    </button>
    <button v-else-if="variant == 'apple'" class="flex items-center space-x-2 bg-black py-2 px-4 rounded-lg">
        <img src="/icons/apple-icon.svg" alt="icon" class="w-[20px]">
        <div class="text-white">
            <p class="text-xs">Télécharger sur</p>
            <p>App Store</p>
        </div>
    </button>
</template>


<script lang="ts" setup>
type Props = {
    variant: "google" | "apple"
}
defineProps<Props>()

</script>