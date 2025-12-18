<template>
  <section id="hero">
    <div class="mb-0 md:mb-12 xl:mb-16">
      <h1>MacBook Pro</h1>
      <img src="/title.png" alt="MacBook Title" />
    </div>
    <video ref="video" src="/videos/hero.mp4" autoplay playsinline muted></video>
    <button>購買</button>
    <p>NT$52,900 起</p>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const video = ref(null)

onMounted(() => {
  if (video.value) {
    video.value.playbackRate = 2
    video.value.play()
  }
})
</script>
