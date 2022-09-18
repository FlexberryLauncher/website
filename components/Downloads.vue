<template>
  <div class="downloads" id="downloads">
    <div class="downloadsInfo">
      <span class="downloadsTitle">Downloads</span>
      <span class="downloadsDescription">Download Flexberry Launcher for your platform</span>
    </div>
    <div class="downloadCards skeleton" v-if="orderedDownloads[0] == 'skeleton'">
      <div :class="(index == 1) ? 'downloadCard fullWidth' : 'downloadCard card'+index" v-for="(download, index) in orderedDownloads" :key="index">
        <div class="downloadCardContent">
          <div class="downloadPlatform"></div>
          <span class="downloadCardTitle">Unknown</span>
        </div>
        <span class="downloadVersion">Download Unknown</span>
        <div class="downloadCardActions">
          <span class="downloadButton">Unknown</span>
          <span class="downloadButton">Unknown</span>
        </div>
      </div>
    </div>
    <div class="downloadCards" v-else>
      <div :class="(index == 1) ? 'downloadCard fullWidth' : 'downloadCard card'+index" v-for="(download, index) in orderedDownloads" :key="index">
        <div class="downloadCardContent">
          <img class="downloadPlatform" :src="'/icons/' + (download[0].platform || 'archive') + '.png'" :alt="download[0].platform || 'source'"/>
          <span class="downloadCardTitle">{{ download[0].platform == "win32" ? "Windows" : (download[0].platform == "linux" ? "Linux" : "Source") }}</span>
        </div>
        <span class="downloadVersion" v-text="'Download ' + launcherVersion"></span>
        <div class="downloadCardActions">
          <a class="downloadButton" v-for="(obj, index) in download" :key="index" v-text="obj.type == 'exe' ? 'installer' : obj.type" :href="obj.url" download></a>
          <span class="downloadButton disabled" v-if="download.length == 1">installer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downloads: {
        win32: [],
        linux: [],
        source: [],
        updateModules: []
      },
      launcherVersion: "v1.0.0",
      platform: "other",
      orderedDownloads: ["skeleton", "skeleton", "skeleton"]
    }
  },
  mounted() {
    this.getDownloads();
    const agent = navigator.userAgent
    if (agent.includes("Android")) {
      this.platform = "android";
    } else if (agent.includes("iP")) {
      this.platform = "ios";
    } else if (agent.includes("Windows")) {
      this.platform = "win32";
    } else if (agent.includes("Mac") && !agent.includes("iP")) {
      this.platform = "mac";
    } else if (agent.includes("Linux") && !agent.includes("Android")) {
      this.platform = "linux";
    } else {
      this.platform = "other";
    }
  },
  methods: {
    getDownloads() {
      this.$axios
        .get("https://api.github.com/repos/FlexberryLauncher/launcher/releases")
        .then((response) => {
          const latestRelease = response.data[0];
          this.launcherVersion = latestRelease.tag_name;
          latestRelease.assets.forEach((asset) => {
            this.downloads[asset.name.includes("asar") ? "updateModules" : (asset.name.split("-")[2] || "updateModules")].push({
              url: asset.browser_download_url,
              type: asset.name.split(".")[1],
              platform: asset.name.split("-")[2]
            });
          });
          this.downloads["source"].push({
            url: latestRelease.zipball_url,
            type: "zip"
          });
          this.downloads["source"].push({
            url: latestRelease.tarball_url,
            type: "tar"
          });
          this.orderPlatforms(this.downloads);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    orderPlatforms(downloads) {
      setTimeout(() => {
        if (this.platform == "win32") {
          this.orderedDownloads = [downloads["source"], downloads["win32"], downloads["linux"]];
        } else if (this.platform == "linux") {
          this.orderedDownloads = [downloads["source"], downloads["linux"], downloads["win32"]];
        } else {
          this.orderedDownloads = [downloads["linux"], downloads["source"], downloads["win32"]];
        }
      }, 1000);
    }
  },
};
</script>

<style>
</style>