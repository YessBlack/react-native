export const BasicFunctions = () => {
  const increaseBy = (num: number, value: number): number => {
    return num + value
  }

  return (
    <div>
      <h3>Basic Functions</h3>
      <p>Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.</p>
      <p>Functions are declared with the function keyword and can have parameters and a return value.</p>
      <p>Here is an example:</p>
      <pre>
        {`
            const increaseBy = (num: number, value: number): number => {
                return num + value
            }

            console.log(increaseBy(5, 2)) // 7
        `}
      </pre>
      { increaseBy(5, 2)}
    </div>
  )
}
