<template>
    <div>
        <div class="section-title flex flex-col space-y-6">
            <div class="title text-center font-bold">
                <h1 class="md:text-6xl text-4xl">Testimonials</h1>
            </div>
            <div class="sub-tile w-3/4 mx-auto">
                <p class="text-center font-light">Wisdom new and valley answer. Contented it so is discourse
                    recommend.
                    Man
                    its upon
                    him call mile. An pasture he himself believe ferrars besides cottage.</p>
            </div>
        </div>
        <div class="space flex justify-center py-10"></div>
        <div class="grid md:grid-cols-3 gap-2">
            <CardTestimonials v-for="(item, index) in testimonials" :key="index" :data="item" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { testimonials } from "~/data/testimonial-data.ts";
</script>