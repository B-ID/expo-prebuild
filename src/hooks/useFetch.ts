import { useEffect } from 'react'

const useFetch = (): string => {
  const variable = 'hello'

  useEffect(() => {
    console.log('useFetch')
  }, [])

  return variable
}

export default useFetch
