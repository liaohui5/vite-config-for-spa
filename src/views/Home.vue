<template>
  <div class="home-page">
    <div>home</div>
    <div>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "#/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped></style>
