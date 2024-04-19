export default () => {
  return {
    async getMsg() {
      return  await useFetch('/api/msg')
    }
  }
}