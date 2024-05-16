interface Person {
  name: string,
  age: number,
  country: string,
  address: {
    city: string,
    zip: number
  }
}

export const ObjectLiterals = () => {
  // Always is a good practice to use interfaces to define the shape of an object
  const person: Person = {
    name: 'John Doe',
    age: 25,
    country: 'USA',
    address : {
      city: 'New York',
      zip: 10001
    },
  }

  return (
    <div>
      <h3>Object Literals</h3>
      <p>{person.name} is {person.age} years old</p>
      <p>He lives in {person.address.city} with zip code {person.address.zip}</p>
    </div>
  )
}
