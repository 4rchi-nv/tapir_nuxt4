<template>
  <header class="header">
    <div class="header__inner">
      <a class="header__logo" href="#">Tapir</a>
      <nav class="header__nav">
        <a class="header__link" href="#">Каталог</a>
        <a class="header__link" href="#">О нас</a>
        <a class="header__link" href="#">Контакты</a>
      </nav>
      <button
        type="button"
        class="header__burger"
        aria-label="Меню"
      >
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--space-md) var(--space-lg);
    gap: var(--space-lg);
  }

  &__logo {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }

  &__link {
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.9375rem;

    &:hover {
      color: var(--color-text);
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: var(--radius-sm);

    &:hover {
      background: var(--color-bg-hover);
    }
  }

  &__burger-line {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--color-text);
    border-radius: 1px;
  }

  @media (max-width: 767px) {
    &__nav {
      display: none;
    }

    &__burger {
      display: flex;
    }
  }
}
</style>
