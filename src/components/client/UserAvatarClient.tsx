//服务端组价获取用户信息
'use client'
import { useSession } from "next-auth/react"
 
export default function UserInfoClient() {
  const { data: session } = useSession()
 
  if (!session?.user) return null
 
  return (
    <div>
        <p>Json:{JSON.stringify(session.user.name)}</p>
        <img src={session.user.image || ''} alt="User Avatar" />
    </div>
  )
}










