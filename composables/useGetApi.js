export async function getApi(item) {
    const { data, pending, error, refresh } = await useAsyncData(
      '${item}',
      () => fetchData(item)
    )
  
    async function fetchData(item) {
      try {
        const response = await fetch(`https://janyu427.github.io/test/vueJson/${item}.json`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json();
        return data
      } catch (error) {
        console.error('Error fetching or parsing data:', error)
        throw error
      }
    }
  
    return { data, pending, error, refresh };
  }