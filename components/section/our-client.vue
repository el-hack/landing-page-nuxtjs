<template>
    <div>
        <div class="space flex justify-center"></div>
        <div class="section-title flex flex-col space-y-6">
            <div class="title text-center font-bold">
                <h1 class="md:text-6xl text-4xl">Our client</h1>
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
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CardClient :client="client" v-for="( client, index) in clients" :key="index" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { clients } from "~/data/our-client-data.ts";
</script>