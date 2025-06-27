import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
  // 对于静态资源和API路由，直接返回
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  // 对于其他路由，在这里可以添加简单的路由保护逻辑
  // 注意：不能在middleware中使用Prisma，需要在页面或API路由中验证session
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}