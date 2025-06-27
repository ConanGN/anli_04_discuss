import Image from "next/image";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import SignInButton from "@/components/sign-in-button";
import UserAvatar from "@/components/UserAvatar";

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

        {/* Hero UI 按钮测试区域 */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-semibold">按钮组件测试</h2>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-4">
              {/* 各种样式的按钮 */}
              <Button color="primary">主要按钮</Button>
              <Button color="secondary">次要按钮</Button>
              <Button color="success">成功按钮</Button>
              <Button color="warning">警告按钮</Button>
              <Button color="danger">危险按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
              <Button variant="bordered">边框按钮</Button>
              <Button color="primary" className="bg-blue-500 text-white">Button</Button>
              <Button isDisabled color="primary">
                Button
              </Button>
              <SignInButton />
              <UserAvatar />
            </div>
          </CardBody>
        </Card>

        {/* Hero UI 卡片测试区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">卡片 1</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                这是一个使用 Hero UI 创建的卡片组件示例。
              </p>
            </CardBody>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">卡片 2</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                Hero UI 与 Tailwind CSS v4 完美配合。
              </p>
            </CardBody>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <h3 className="text-xl font-semibold">卡片 3</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                无需 tailwind.config.js 文件即可正常工作！
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
