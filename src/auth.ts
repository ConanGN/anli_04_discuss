import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      // 添加授权 URL 配置来解决连接问题
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  // 添加调试和超时配置
  debug: process.env.NODE_ENV === 'development',
  // 配置会话策略
  session: {
    strategy: "database",
  },
  // 添加回调函数来处理错误和超时
  callbacks: {
    async signIn({ user, account, profile }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      // 处理重定向，避免超时问题
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  // 添加错误页面配置
  pages: {
    error: '/auth/error', // 自定义错误页面
  },
})

