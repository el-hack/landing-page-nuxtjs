<template>
  <div class="relative">
    <div class="relative -z-[1]">
      <img class="absolute right-0" src="/icons/elipse.svg" alt="">
      <div class="bg-primary">
        <header class="space-y-6 relative text-white">
          <div class="md:flex md:flex-row flex-col space-y-6 md:space-y-0 justify-evenly py-6 items-center hidden">
            <div class="onglet">
              <ul class="flex justify-evenly space-x-4">
                <li class="">Home</li>
                <li>About</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div class="logo text-3xl font-bold">
              smartHome
            </div>
            <div class="action-bottom flex space-x-4 items-center">
              <!-- <ButtonBase>Sign up</ButtonBase> -->
              <p>Sign up</p>
              <ButtonBase variant="primary">Connexion</ButtonBase>
            </div>
          </div>
          <Icon name="uil:bars"
            class="text-3xl md:hidden flex absolute transform -translate-y-1/2 top-1/2 right-5 cursor-pointer" />
        </header>
        <div class="hero flex justify-center py-20"></div>
      </div>



      <slot />
    </div>
    <div>

      <div class="container mx-auto w-[95%]">
        <SectionFooter />
      </div>
      <!-- Copyright section -->
      <div class="space flex justify-center py-4"></div>
      <SectionCopyRigth />
    </div>
    <img src="/icons/fil.svg" alt="" class="absolute transform -translate-y-1/2 top-1/3 -z-10 left-0">
  </div>
</template>
<script setup>
import { datas } from "~/data/about-data.ts";
import { clients } from "~/data/our-client-data.ts";
import { testimonials } from "~/data/testimonial-data.ts";
import { faqs } from "~/data/faq-data.ts";
</script>