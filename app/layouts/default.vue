<template>
  <div class="layout">
    <TheHeader />
    <main class="layout__main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1 0 auto;
  }
}
</style>
