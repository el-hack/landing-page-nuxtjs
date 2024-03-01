<template>
    <div class="grid grid-flow-col-1 md:grid-cols-2 space-x-36 items-center">
        <div class="mb-2">
            <div class="mb-10">
                <p class="md:text-left text-center md:text-6xl text-4xl  font-bold mb-5">Download <br> App</p>
                <p class="md:text-left text-center font-light">Wisdom new and valley answer. Contented it so is discourse
                    recommend. Man
                    its upon him call mile. An
                    pasture he himself believe ferrars besides cottage.</p>
            </div>
            <div class="flex space-x-4 justify-center md:justify-start">
                <ButtonStore :variant="'google'" class="shadow-xl" />
                <ButtonStore :variant="'apple'" class="shadow-2xl" />
            </div>
        </div>
        <div class="flex justify-center items-center">
            <img src="/images/about-step-1.png" alt="" class="h-[500px] md:h-[800px]">
        </div>
    </div>
</template>