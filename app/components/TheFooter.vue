<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col">
        <a class="footer__link" href="#">Каталог</a>
        <a class="footer__link" href="#">О нас</a>
        <a class="footer__link" href="#">Контакты</a>
      </div>
      <div class="footer__col">
        <a class="footer__link" href="#">Доставка</a>
        <a class="footer__link" href="#">Оплата</a>
        <a class="footer__link" href="#">Возврат</a>
      </div>
      <div class="footer__col footer__col--copy">
        <span class="footer__copy">&copy; {{ year }} Tapir</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  flex-shrink: 0;
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);

  &__inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--space-xl);
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &--copy {
      justify-content: flex-end;
    }
  }

  &__link {
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
      color: var(--color-text);
    }
  }

  &__copy {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }
}
</style>
