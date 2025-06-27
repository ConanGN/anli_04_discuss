
// Authjs 添加登录组件，使用github登录
import { signIn } from "@/auth"
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 