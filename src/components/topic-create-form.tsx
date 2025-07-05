// 声明这是一个客户端组件，在浏览器中运行
"use client"
// 从 HeroUI 导入需要的组件：按钮、弹出框、弹出框触发器、弹出框内容
import { Button, Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
// 从 React 导入核心库和 useActionState 钩子
import React, { useActionState, startTransition } from "react";
// 从 HeroUI 导入输入框和文本域组件
import { Input, Textarea } from "@heroui/react";
// 导入所有的服务器端操作函数
import * as section from "@/section";

// 导出默认的主题创建表单组件
export default function TopicCreateForm(){
    // 使用 useActionState 钩子管理表单状态
    // section.createTopic: 表单提交时要调用的服务器端函数
    // {errors: {}}: 初始状态，包含空的错误对象
    // state: 当前状态，包含错误信息
    // formAction: 表单提交函数，会触发 createTopic 服务器端函数
    const [state, formAction] = useActionState(section.createTopic, {errors: {}})


    // 定义一个处理表单提交的函数
    // event:React.FormEvent<HTMLFormElement> 是TypeScript类型注解，含义如下：
    // - React.FormEvent：这是React提供的表单事件类型，专门用于处理表单相关的事件
    // - <HTMLFormElement>：这是泛型参数，指定了触发事件的DOM元素类型
    //   - HTMLFormElement 表示这个事件来自于HTML的<form>元素
    //   - 这样TypeScript就知道 event.currentTarget 是一个表单元素，具有表单的所有属性和方法
    // - 整个类型的意思是：这个event参数是一个来自HTML表单元素的React表单事件对象
    // - 通过这个类型注解，我们可以安全地访问表单相关的属性，如 event.currentTarget、event.preventDefault() 等
    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        // 阻止表单默认提交行为，防止页面刷新
        event.preventDefault()
        // 从当前表单元素中获取所有表单数据
        const formData = new FormData(event.currentTarget)
        // 使用startTransition包装状态更新，使UI保持响应
        startTransition(() => {
            // 调用formAction处理表单数据，触发服务器端操作
            formAction(formData)
        })
        // 注意：这里没有重置表单，因为我们希望保留用户输入直到操作完成
    }


    // 返回组件的 JSX 结构
    return(
        
        // 创建一个弹出框，位置设置为左侧
        <Popover placement="left">
            {/* 弹出框触发器，点击时显示弹出框内容 */}
        <PopoverTrigger> 
            {/* 触发按钮，secondary 颜色，bordered 边框样式 */}
            <Button color="secondary" variant='bordered'>Create a Topic</Button>
        </PopoverTrigger>
        {/* 弹出框的内容区域 */}
        <PopoverContent>
        {/* 表单元素，action 属性绑定 formAction 函数 */}
        <form onSubmit={handleSubmit} noValidate>
            {/* 表单容器，使用 flexbox 布局，垂直排列，间距为 4，内边距为 4，宽度为 80 */}
            <div className="flex flex-col gap-4 p-4 w-80">
                {/* 表单标题 */}
                <h3 className="text-lg font-bold">Create a Topic</h3>
                {/* 主题名称输入框 */}
                {/* name: 表单字段名称，用于服务器端获取数据 */}
                {/* label: 输入框标签文本 */}
                {/* labelPlacement: 标签位置，outside 表示在输入框外部 */}
                {/* placeholder: 占位符文本 */}
                {/* isInvalid: 错误状态，!!将可能的 undefined 转换为布尔值 */}
                {/* errorMessage: 错误消息，显示第一个错误信息 */}
                <Input name="name" label="Name" labelPlacement="outside" placeholder="name" isInvalid={!!state.errors.name} errorMessage={state.errors.name?.join(", ")}/> 
                {/* 主题描述文本域 */}
                {/* name: 表单字段名称 */}
                {/* label: 文本域标签 */}
                {/* labelPlacement: 标签位置 */}
                {/* placeholder: 占位符文本 */}
                {/* isInvalid: 错误状态检查 */}
                {/* errorMessage: 显示错误数组的第一个错误信息 */}
                <Textarea name="description" label="Description" labelPlacement="outside" placeholder="descript your topic" isInvalid={!!state.errors.description} errorMessage={state.errors.description?.[0]}/> 
                {/* 表单提交按钮 */}
                {/* type: 按钮类型为 submit，点击时会触发表单提交 */}
                {/* color: 按钮颜色为主色调 */}
                <Button type="submit" color="primary">Submit</Button>
            </div>
        </form>
        </PopoverContent>
      </Popover>
    )
}