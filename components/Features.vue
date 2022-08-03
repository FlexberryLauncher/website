<template>
  <div id="features" class="features">
    <div class="featureCards">
      <div class="featuresInfo featureCard">
        <span class="featuresTitle">Features</span>
        <span class="featuresDescription">Here's blazing features of Flexberry Launcher</span>
      </div>
      <div v-for="(feature, index) in features" :key="index" class="featureCard">
        <div class="featureIcon">
          <img class="icon" :src="'/icons/' + feature.icon + '.svg'" />
          <span class="tag" v-if="feature.soon">soon</span>
        </div>
        <div class="featureCardContext">
          <span class="featureCardTitle">{{ feature.title }}</span>
          <span class="featureCardDescription">{{ feature.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesPage',
  data() {
    return {
      features: [
        {
          title: "Up to Date",
          description: "Always up to date with the latest Minecraft updates.",
          icon: "cube-alt",
          soon: false
        },
        {
          title: "Cross-Platform",
          description: "Works on Linux, MacOS and Windows with full support.",
          icon: "bolt-circle",
          soon: false
        },
        {
          title: "Themes",
          description: "Theme system that allows you to change the look of the launcher.",
          icon: "color",
          soon: false
        },
        {
          title: "Offline Support",
          description: "Supports playing without internet connection.",
          icon: "wifi-off",
          soon: false
        },
        {
          title: "Skin Library",
          description: "Has a skin library with thousands of skins for you to choose.",
          icon: "show",
          soon: true
        }
      ]
    }
  }
}
</script>