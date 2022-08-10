<template>
  <div class="navbar">
    <div class="navbarSection">
      <img src="~/assets/images/fl.png" alt="Flexberry Launcher logo" class="navbarLogo"/>
    </div>
    <div class="navbarSection">
      <span v-for="link in links" :key="link.name" :class="'navbarLink ' + link.class" @click="scrollTo(link.to)">
        {{link.name}}
      </span>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Intro",
        to: "intro"
      },
      {
        name: "Features",
        to: "features"
      },
      {
        name: "Download",
        to: "download",
        class: "button buttonSecondary"
      }
    ]
  }),
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      })
    },
    handleScroll () {
      let navbar = document.querySelector('.navbar')
      if (window.scrollY > 0) {
        navbar.classList.add('navbarScrolled')
      } else {
        navbar.classList.remove('navbarScrolled')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
