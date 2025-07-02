import { signOut } from "@/auth"   //服务端组件 登录退出按钮
 
export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}