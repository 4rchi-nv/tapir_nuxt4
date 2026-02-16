<template>
  <a class="product-card" href="#">
    <div class="product-card__image-wrap">
      <img
        class="product-card__image"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        width="280"
        height="280"
      />
      <button
        type="button"
        class="product-card__favorite"
        aria-label="Добавить в избранное"
      />
    </div>
    <h3 class="product-card__title">{{ product.name }}</h3>
    <div class="product-card__prices">
      <span class="product-card__price">{{ formatPrice(product.price) }} ₽</span>
      <span class="product-card__price product-card__price--x2">x2 {{ formatPrice(priceX2(product.price)) }} ₽</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/shared/types/api'
import { priceX2 } from '~/composables/useProducts'

defineProps<{
  product: Product
}>()

function formatPrice(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value)
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &__image-wrap {
    position: relative;
    aspect-ratio: 1;
    background: var(--color-bg-alt);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__favorite {
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    width: 36px;
    height: 36px;
    padding: 0;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    cursor: default;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
  }

  &__title {
    flex: 1;
    padding: var(--space-md);
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__prices {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--space-sm);
    padding: 0 var(--space-md) var(--space-md);
  }

  &__price {
    font-size: 1rem;
    font-weight: 600;

    &--x2 {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-text-muted);
    }
  }
}
</style>
