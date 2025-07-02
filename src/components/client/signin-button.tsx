"use client"
import { signIn } from "next-auth/react"  //客户端组件 登录按钮
 
export default function SignInClient() {
  return (
    <button onClick={() => signIn("github")}>
      Sign In client
    </button>
  )
}