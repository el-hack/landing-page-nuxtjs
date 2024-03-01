<template>
    <div class="section-title flex flex-col space-y-6">
        <div class="title text-center font-bold">
            <h1 class="text-6xl">About us</h1>
        </div>
        <div class="sub-tile w-3/4 mx-auto">
            <p class="text-center font-light">Wisdom new and valley answer. Contented it so is discourse
                recommend.
                Man
                its upon
                him call mile. An pasture he himself believe ferrars besides cottage.</p>
        </div>
    </div>
    <div class="space flex  py-[150px]"></div>
    <div v-for="(item, index) in datas" class="">
        <div v-if="(index + 1) % 2 === 0"
            class="mx-auto w-[80%] mb-[450px] flex flex-col md:space-x-10 space-y-20 md:space-y-0 md:flex-row">
            <div class="text-center md:text-left md:mb-0 mb-40">
                <h1 class="text-3xl font-bold mb-2">{{ item.title }}</h1>
                <p class="">
                    {{ item.description }}
                </p>
                <ButtonBase variant="tertiary" class="mt-10 shadow-5xl">Learn more</ButtonBase>
            </div>
            <div class="flex justify-center md:justify-end">
                <div class="bg-primary w-[400px] h-[250px] relative rounded-md">
                    <img :src="item.imageSrc" alt=""
                        class="h-[500px] md:h-[600px] w-fit absolute top-10 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                </div>
            </div>
        </div>
        <div v-else
            class="mx-auto md:mb-[450px] mb-32 w-[80%] flex flex-col md:space-x-10 space-y-20 md:space-y-0 md:flex-row">
            <div class="flex justify-center md:justify-end">
                <div class="bg-primary w-[400px] h-[250px] relative rounded-md">
                    <img :src="item.imageSrc" :alt="item.title"
                        class="h-[500px] md:h-[600px] w-fit absolute top-10 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                </div>
            </div>
            <div class="text-center md:text-left">
                <h1 class="text-3xl font-bold mb-2">{{ item.title }}</h1>
                <p class="">
                    {{ item.description }}
                </p>
                <ButtonBase variant="secondary" class="mt-10 shadow-5xl">Learn more</ButtonBase>
            </div>
        </div>
    </div>
</template>

<script setup>
import { datas } from "~/data/about-data.ts";
</script>