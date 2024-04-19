import { defineStore } from 'pinia'
import useApi from '@/composables/api'

export const useBaseStore = defineStore('base', ()=> {
  const api = useApi()
  const someValue = ref(false)

  const testFunction = async () => {
    const res = await api.getMsg()

    if (res.data.value != null) {
      someValue.value = true
    }
    else {
      someValue.value = false
    }
  }
  return {
    someValue,
    testFunction
  }
})