import { useEffect, useRef, useState } from 'react'
import { Datum, RequestResponseUserList } from '../interfaces'
import axios from 'axios'

export const useUsers = () => {
  const [users, setUsers] = useState<Datum[]>([])
  const currentPage = useRef(1)

  useEffect(() => {
    loadUsers(currentPage.current).then(users => setUsers(users))
  }, [])

  const loadUsers = async (page: number = 1) => {
    try {
      const { data } = await axios.get<RequestResponseUserList>('https://reqres.in/api/users?page=2', {
        params: {
          page
        }
      })
      return data.data;
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const nextPage = async () => {
      currentPage.current++
      const users = await loadUsers(currentPage.current)

      if (users.length > 0) {
        setUsers(users)
      } else {
        currentPage.current--
      }
  }

  const prevPage = async () => {
      if (currentPage.current < 1) return

      currentPage.current--
        
      const users = await loadUsers(currentPage.current)
      setUsers(users)
  }

  return {
    users,
    nextPage,
    prevPage
  }
}
