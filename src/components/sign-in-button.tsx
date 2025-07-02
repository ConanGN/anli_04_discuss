
// Authjs 添加登录组件，使用github登录
import { signIn } from "@/auth"   //服务端组件 登录按钮
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")   
        // await signIn("github", { redirectTo: "/dashboard" })
      }}>
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 



