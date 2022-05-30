<template>
  <div class="hero">
    <div class="heroContent">
      <span class="heroTitle">
        Lightweight, <span class="highlight">flexible</span> and secure.
      </span>
      <span class="heroDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos eligendi iusto accusamus, nostrum architecto unde ab pariatur nobis cumque.
      </span>
      <div class="heroButtons">
        <NuxtLink id="heroDownload" class="button" to="/download">
          Download
        </NuxtLink>
        <span class="button secondaryButton" @click="scrollMore()">
          Learn More
        </span>
      </div>
    </div>
    <div class="heroImageContent">
      <img src="~/assets/images/launcher.png" class="heroImage" alt="Flexberry Launcher">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollMore() {
      window.scrollTo(0, window.innerHeight + window.innerHeight/2);
    }
  }
}
</script>

<style>

</style>