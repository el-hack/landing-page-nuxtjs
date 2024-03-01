
<template>
  <div class="flex flex-col h-[250px] justify-between space-y-2 bg-[#FAFAFA] py-4 px-4 box-border border border-[#E7EBEE] rounded">
    <p class="text-ellipsis font-light">
      {{data.message}}
    </p>
    <div class="flex space-x-1 items-center">
      <div :style="'background: url(' + data.user.avatar + ') no-repeat center center/cover' " class="w-[70px] h-[70px] rounded-full"></div>
      <div class="flex flex-col">
        <p>
          {{data.user.name}}
        </p>
        <p class="text-sm text-gray-dark">
          {{data.user.role}}
        </p>
      </div>
    </div>
  </div>
</template>

<script  lang="ts" setup>
import type {TestimonialSectionType} from "@/data/testimonial-data.ts";

type Props = {
  data : TestimonialSectionType
}


defineProps<Props>()
</script>
