export const BasicTypes = () => {
  const name: string = 'John Doe'
  const age: number = 25
  const isActive: boolean = true

  const powers: string[] = ['React', 'TypeScript', 'Node.js']

  return (
    <div>
      <h3>Basic Types</h3>
      <p>{name} is {age} years old</p>
      <p>Is he active? {isActive ? 'Yes' : 'No'}</p>
      <h4>Powers:</h4>
      <ul>
        {powers.map((power, index) => (
          <li key={index}>{power}</li>
        ))}
      </ul>
    </div>
  )
}
