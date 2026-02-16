import type { ProductsResponse } from '~/shared/types/api'

const API_BASE = 'https://test-task-api.tapir.ws'

export function useProductsApi() {
  async function fetchProducts(page: number, limit = 10): Promise<ProductsResponse> {
    const url = `${API_BASE}/products?page=${page}&limit=${limit}`
    const res = await $fetch<ProductsResponse>(url)
    return res
  }

  return { fetchProducts }
}

/** Цена «x2»: цена / 2, округление вверх до целого */
export function priceX2(price: number): number {
  return Math.ceil(price / 2)
}
