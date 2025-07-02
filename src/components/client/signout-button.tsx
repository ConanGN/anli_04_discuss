"use client"
import React from "react" // 导入React以支持JSX语法
import { signOut } from "next-auth/react" // 导入next-auth的signOut函数

export default function SignOutClient() {
  // 返回一个按钮，点击时调用signOut函数进行登出
  return (<button onClick={() => signOut()}>Sign Out client</button>)
} 