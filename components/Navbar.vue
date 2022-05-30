<template>
  <div class="navbar" id="navbar">
    <div class="navbarGroup">
      <NuxtLink class="navbarTitle highlight" to="/">FL</NuxtLink>
    </div>
    <div class="navbarGroup">
      <NuxtLink class="navbarLink navbarActiveLink" to="/">Home</NuxtLink>
      <a class="navbarLink" href="https://github.com/kuzeeeyk/flexberry-launcher/issues/new/choose" target="_blank">Support</a>
      <a class="navbarLink" href="https://discord.gg" target="_blank">Discord</a>
    </div>
    <div class="navbarGroup">
      <NuxtLink id="navbarDownload" to="/download" onclick="downloadLink" class="navbarLink navbarPrimaryLink">Download</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll () {
      let heroDownload = document.getElementById("heroDownload");
      let navbarDownload = document.getElementById("navbarDownload");
      let navbar = document.getElementById("navbar");
      if (heroDownload.getBoundingClientRect().top < 0) {
        navbarDownload.style.transform = "translateY(0)";
        navbar.classList.add("navbarScrolled");
      } else {
        navbarDownload.style.transform = "translateY(-64px)";
        navbar.classList.remove("navbarScrolled");
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>

</style>