import { describe, it, expect, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useBaseStore } from './stores/baseStore'
import api from './composables/api'

describe('baseStore函式測試', () => {
  it ('testFunction測試', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useBaseStore(pinia)

    // 不確定寫法正確性，待確認
    vi.mock('./composables/api', () => ({
      getMsg: vi.fn().mockReturnValue({ data: { value: 'test' } })
    }))
    
    // 執行testFunction 預期someValue為true
    await store.testFunction()
    // 驗證someValue是否為true
    expect(store.someValue).toBe(true)
   })
})