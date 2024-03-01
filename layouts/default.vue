<template>
  <div class="relative">
    <div class="bg-primary relative text-white -z-[1]">
      <img class="absolute right-0" src="/icons/elipse.svg" alt="">
      <header class="space-y-6 relative">
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
      <div class="section-title flex flex-col space-y-6">
        <div class="title text-center font-bold">
          <h1 class="md:text-6xl text-5xl">Smart Home <br> Application</h1>
        </div>
        <div class="sub-tile w-3/4 mx-auto">
          <p class="text-center font-light md:text-lg text-sm">Wisdom new and valley answer. Contented it so is discourse
            recommend.
            Man
            its upon
            him call mile. An pasture he himself believe ferrars besides cottage.</p>
        </div>
      </div>
      <div class="space flex justify-center py-52"></div>


      <slot />
    </div>
    <div class="-my-80">
      <img class="" src="/images/hero-image.png" alt="" />
      <div class="space flex justify-center py-10"></div>
      <div class="flex space-x-4 justify-center">
        <ButtonStore :variant="'google'" class="shadow-2xl" />
        <ButtonStore :variant="'apple'" class="shadow-2xl" />
      </div>
      <div class="space flex justify-center py-32"></div>
      <div class="container mx-auto w-[95%]">
        <!--      About section-->
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
        <!--        Our client section -->
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
        <div class="space flex justify-center py-32"></div>
        <!--        Testimonials section -->
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
        <div class="space flex justify-center py-32"></div>
        <!--         FAQ Section-->
        <div>
          <div class="section-title flex flex-col space-y-6">
            <div class="title text-center font-bold">
              <h1 class="md:text-6xl text-4xl">FAQ</h1>
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
          <div class="flex flex-col space-y-2">
            <CardFaq v-for="(item, index) in faqs" :key="index" :data="item" :index-id="index" />
          </div>
        </div>
        <!-- download app section  -->
        <div class="space flex justify-center py-32"></div>
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
        <!-- Subcribe newletter section  -->
        <div class="space flex justify-center py-32"></div>
        <div
          class="bg-primary relative flex md:flex-row flex-col md:space-y-0 items-center space-y-10 p-20 rounded-md justify-between">
          <div class="flex-1">
            <p class="md:text-left text-center md:text-6xl text-4xl font-bold mb-5 text-white">
              Subscribe to get updated
            </p>
            <p class="md:text-left text-center font-light text-white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque .
            </p>
          </div>
          <div class="flex-1 justify-end flex">
            <ButtonBase variant="tertiary" class="text-white border-white">Get start</ButtonBase>
          </div>
          <img src="/icons/elipse-reverse.svg" alt="" class="absolute bottom-0 right-0">
        </div>
        <!-- Footer section  -->
        <div class="space flex justify-center py-32"></div>
        <div class="flex md:flex-row flex-col md:space-x-20 space-y-20 md:space-y-0 justify-between">
          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-5">Smart Home</h3>
            <p class="font-light">Automate your entire healthcare hiring, onboarding and compliance with a true technology
              platform.</p>
            <div>

            </div>
          </div>
          <div>
            <h1 class="font-bold text-lg uppercase mb-6">CATEGORIES</h1>
            <ul>
              <li>Product Management</li>
              <li>Design / Creatives</li>
              <li>Education & Training</li>
              <li>UI/UX Designers</li>
              <li>Development</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div>
            <h1 class="font-bold text-lg uppercase mb-6">ABOUT</h1>
            <ul>
              <li>About Us</li>
              <li>Partnerships</li>
              <li>Finance Experts</li>
              <li>Project Management</li>
              <li>Product Manager</li>
              <li>The Team</li>
            </ul>
          </div>
          <div>
            <h1 class="font-bold text-lg uppercase mb-6">CATEGORIES</h1>
            <ul class="flex flex-col space-y-2">
              <li class="font-light text-opacity-85">Facebook</li>
              <li class="font-light">Twitter</li>
              <li class="font-light">Instagram</li>
              <li class="font-light">UI/UX Designers</li>
              <li class="font-light">Development</li>
              <li class="font-light">Linkedin</li>
            </ul>
          </div>
        </div>
        
      </div>
      <!-- Copyright section -->
      <div class="space flex justify-center py-4"></div>
        <div class="text-center py-5 bg-[#000F37]">
          <p class="text-white font-light">Copyright © 2022. All rights reserved.</p>
        </div>
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