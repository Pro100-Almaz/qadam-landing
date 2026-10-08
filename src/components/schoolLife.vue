<template>
    <div ref="carousel" class="w-full overflow-hidden bg-white relative">
      <div
        ref="scrollContainer"
        class="flex gap-6"
        :style="{ transform: `translateX(-${offset}px)` }"
      >
        <template v-for="(image, index) in duplicatedImages" :key="index">
          <img class="w-2/3 sm:w-1/3 md:w-1/4 shrink-0 aspect-[4/3] object-cover" :src="image" alt="" />
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const scrollContainer = ref(null);
  const offset = ref(0);
  let animationFrame;
  let imageWidth = 0;
  const speed = 0.5;
  
  const images = [
    new URL("../assets/IMG_3425.png", import.meta.url).href,
    new URL("../assets/IMG_3364.png", import.meta.url).href,
    new URL("../assets/IMG_3423.png", import.meta.url).href,
    new URL("../assets/DSC09934.png", import.meta.url).href,
  ];
  
  const duplicatedImages = [...images, ...images]; // for seamless loop
  
  const animate = () => {
    offset.value += speed;
  
    if (scrollContainer.value) {
      if (!imageWidth) {
        const img = scrollContainer.value.querySelector("img");
        imageWidth = img?.offsetWidth + 24; // image width + gap (gap-6 = 1.5rem = 24px)
      }
  
      if (offset.value >= imageWidth * images.length) {
        offset.value = 0;
      }
    }
  
    animationFrame = requestAnimationFrame(animate);
  };
  
  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animationFrame = requestAnimationFrame(animate);
  });
  
  onUnmounted(() => {
    cancelAnimationFrame(animationFrame);
  });
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  