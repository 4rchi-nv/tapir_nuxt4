<template>
  <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Добро пожаловать в каталог</h1>
      <p class="hero__text">Выберите товары и оформите заказ</p>
      <NuxtLink class="hero__btn" to="/catalog">
        В каталог
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: var(--space-2xl) var(--space-lg);
  background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
    max-width: 560px;
  }

  &__title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    line-height: 1.2;
  }

  &__text {
    font-size: 1.125rem;
    color: var(--color-text-muted);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-md) var(--space-xl);
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background: var(--color-primary);
    border: none;
    border-radius: var(--radius-md);
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
