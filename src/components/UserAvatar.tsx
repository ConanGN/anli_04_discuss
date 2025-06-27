import { auth } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
        <p>Json:{JSON.stringify(session.user.name)}</p>
        <img src={session.user.image || ''} alt="User Avatar" />
    </div>
  )
}










