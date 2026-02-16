<template>
  <div class="catalog">
    <div class="catalog__inner">
      <h1 class="catalog__title">Каталог товаров</h1>

      <div v-if="products.length" class="catalog__grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <template v-if="products.length">
        <div v-if="loading" class="catalog__loading">
          Загрузка...
        </div>
        <button
          v-else-if="hasNextPage && !error"
          type="button"
          class="catalog__more"
          @click="loadMore"
        >
          Показать ещё
        </button>
        <div v-if="error" class="catalog__error">
          <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
          <button type="button" class="catalog__retry" @click="retry">
            Повторить
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/shared/types/api'
import { useProductsApi } from '~/composables/useProducts'

const { fetchProducts } = useProductsApi()
const limit = 10

// Первая страница — через useAsyncData для SSR
const { data: initialData } = await useAsyncData('catalog-page-1', () =>
  fetchProducts(1, limit)
)

const products = ref<Product[]>(initialData.value?.products ?? [])
const currentPage = ref(initialData.value?.currentPage ?? 1)
const totalPages = ref(initialData.value?.totalPages ?? 0)
const loading = ref(false)
const error = ref(false)

const hasNextPage = computed(() => currentPage.value < totalPages.value)

async function loadMore() {
  if (loading.value || !hasNextPage.value) return
  loading.value = true
  error.value = false
  try {
    const nextPage = currentPage.value + 1
    const res = await fetchProducts(nextPage, limit)
    products.value = [...products.value, ...res.products]
    currentPage.value = res.currentPage
    totalPages.value = res.totalPages
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

function retry() {
  error.value = false
  loadMore()
}
</script>

<style lang="scss" scoped>
.catalog {
  padding: var(--space-xl) var(--space-lg) var(--space-2xl);
}

.catalog__inner {
  max-width: var(--layout-width);
  margin: 0 auto;
}

.catalog__title {
  margin-bottom: var(--space-xl);
  font-size: 1.75rem;
  font-weight: 700;
}

.catalog__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.catalog__loading,
.catalog__more,
.catalog__error {
  display: flex;
  justify-content: center;
  padding: var(--space-lg);
}

.catalog__loading {
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}

.catalog__more {
  padding: var(--space-md) var(--space-xl);
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

.catalog__error {
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-xl);
  background: var(--color-bg-alt);
  border-radius: var(--radius-md);
}

.catalog__error-text {
  color: var(--color-error);
  font-size: 0.9375rem;
}

.catalog__retry {
  padding: var(--space-sm) var(--space-lg);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-primary);
  background: transparent;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
}
</style>
