<template>
    <button :class="variant == 'primary' ? 'bg-white text-black font-light py-4 px-6 rounded' : variant == 'secondary' ? 'bg-black text-white font-light py-4 px-6 rounded' : 'border border-black  text-black font-light py-4 px-6 rounded'">
        <slot />
    </button>
</template>

<script lang="ts" setup>
type Props = {
    variant: "primary" | "secondary" | "tertiary"
}

defineProps<Props>()

</script>