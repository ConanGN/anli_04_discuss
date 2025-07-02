import Image from "next/image";
// import { Button, Card, CardBody, CardHeader } from "@heroui/react"; // Hero UI导入有问题，暂时注释
import SignInButton from "@/components/sign-in-button";
import UserAvatar from "@/components/UserAvatar";
import SignOutButton from "@/components/signout-button";
import SignInClient from "@/components/client/signin-button";
import SignOutClient from "@/components/client/signout-button";
import UserInfoClient from "@/components/client/UserAvatarClient";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 页面标题 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hero UI + Next.js 测试页面
          </h1>
          <p className="text-lg text-gray-600">
            测试 Hero UI 组件是否正常工作
          </p>
        </div>

        {/* 按钮测试区域 - 使用原生HTML替代 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="pb-4">
            <h2 className="text-2xl font-semibold">按钮组件测试</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {/* 使用标准button元素替代Hero UI按钮 */}
              <button className="px-4 py-2 bg-blue-500 text-white rounded">主要按钮</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded">次要按钮</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">成功按钮</button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded">警告按钮</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded">危险按钮</button>
              <button className="px-4 py-2 bg-transparent border border-gray-300 rounded">幽灵按钮</button>
              <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded">边框按钮</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Button</button>
              <button disabled className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
                Button
              </button>

              <SignInButton />
              <UserAvatar />
              <SignOutButton />

              <br />
              <SignInClient />
              <SignOutClient />

              <br />
              <SessionProvider>
                <UserInfoClient />
              </SessionProvider>
            </div>
          </div>
        </div>

        {/* 卡片测试区域 - 使用原生div替代 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div>
              <h3 className="text-xl font-semibold">卡片 1</h3>
            </div>
            <div>
              <p className="text-gray-600">
                这是一个使用原生HTML创建的卡片组件示例。
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <div>
              <h3 className="text-xl font-semibold">卡片 2</h3>
            </div>
            <div>
              <p className="text-gray-600">
                原生HTML与 Tailwind CSS 完美配合。
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <div>
              <h3 className="text-xl font-semibold">卡片 3</h3>
            </div>
            <div>
              <p className="text-gray-600">
                无需复杂组件库即可正常工作！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
