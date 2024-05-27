import { useUsers } from "../hooks"
import { UserRow } from "./UserRow"

export const UsersPage = () => {
  const { users, prevPage, nextPage } = useUsers()  

  return (
    <div>
      <h3>Users Page</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <UserRow key={user.id} user={user} />
            ))
          }
        </tbody>
      </table>
      <button onClick={prevPage}>Preview</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}
