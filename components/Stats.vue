<template>
  <div class="stats" id="stats">
    <div class="stat">
      <span class="statTitle">Downloads</span>
      <span class="statValue" v-text="totalDownloads"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    totalDownloads: 0
  }),
  mounted () {
    this.getTotalDownloads();
  },
  methods: {
    getTotalDownloads () {
      this.$axios.$get("https://api.github.com/repos/FlexberryLauncher/launcher/releases?perPage=100").then((data) => {
        if (!data[0])
          return this.totalDownloads = 0;
        const totalDownloads = data.map((release) => release.assets.filter((asset) => !asset.name.includes("update")).map(asset => asset.download_count)).flat().reduce((a, b) => a + b);
        const totalUpdates = data.map((release) => release.assets.map(asset => asset.download_count)).flat().reduce((a, b) => a + b) - totalDownloads; 
        this.totalDownloads = totalDownloads;
      });
    },
  }
}
</script>

<style>

</style>