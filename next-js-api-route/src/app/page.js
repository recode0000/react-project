"use client";

import {useState,useEffect} from 'react'
import Link from 'next/link';

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    }
    fetchUsers()
  },[])

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Link href="/about">Aboutページ</Link>
    </div>
  )
}