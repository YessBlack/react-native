import { useState } from "react"

interface Counter {
    initialValue?: number
}
export const useCounter = ({
  initialValue = 0
}: Counter) => {
  const [count, setCount] = useState(initialValue)

  const increaseBy = (value: number) => {
      setCount(count + value)
  }

  return {
    increaseBy,
    count
  }
}
