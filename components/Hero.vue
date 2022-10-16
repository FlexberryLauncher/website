<template>
  <div class="hero" id="intro">
    <div class="heroContent">
      <span class="heroTitle">Lightweight, fast and secure</span>
      <span class="heroDescription">One of the best Minecraft launcher experience you will ever experience. Flexberry Launcher cares about you and your data, it's fully open-source!</span>
    </div>
    <div class="heroActions">
      <span class="button" @click="scrollTo('downloads')">Download</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  }
}
</script>