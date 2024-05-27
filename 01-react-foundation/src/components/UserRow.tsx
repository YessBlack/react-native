import { Datum } from "../interfaces"

interface UserRowProps {
  user: Datum
}

export const UserRow = ({ user }: UserRowProps) => (
  <tr>
    <td>
      <img src={user.avatar} alt={user.first_name} />
    </td>
    <td>{user.first_name} {user.last_name}</td>
    <td>{user.email}</td>
  </tr>
)
