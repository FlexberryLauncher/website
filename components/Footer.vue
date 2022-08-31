<template>
  <div class="footer" id="footer">
    <div class="footerDivider">
      <span class="footerBrand">FLXBRRY.</span>
      <span class="footerInfo">from Turkiye, made with &lt;3</span>
    </div>
    <div class="footerDivider">
      <div class="goBackToTop" @click="scrollTo('intro')">
        <img src="/icons/chevron-up.svg" alt="Go back to top" class="topIcon"/>
      </div>
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