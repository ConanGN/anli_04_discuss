// 声明这是一个服务器端函数，只能在服务器上运行，不会发送到客户端
"use server"
// 导入 zod 库，用于数据校验和类型安全
import {z} from "zod"
import { auth } from "@/auth"
import { promise } from "zod/v4"

// 定义创建主题表单的状态接口，用于跟踪表单提交过程中的错误信息
// interface 关键字用于声明一个类型，这里定义了表单状态的结构
interface CreateTopicFormState {
    // errors 对象包含可能的错误信息
    errors:{
        // name 字段的错误信息数组，?表示可选属性
        name?: string[]
        // description 字段的错误信息数组，?表示可选属性
        description?: string[]
        //是否登录错误信息
        _form?: string[]
    }    
}

// 使用 zod 定义表单数据的校验规则
const createTopSchema = z.object({
    // name 字段校验规则：必须是字符串，最小长度3位，只能包含字母和数字
    name: z.string().min(3).regex(/^[a-zA-Z0-9]+$/, {message: "只能输入字母和数字，且长度最小3位"}),   
    // description 字段校验规则：必须是字符串，最小长度10位，最大长度100位
    description: z.string().min(10).max(100)
})

// 导出默认的异步函数，用于创建主题
// prevState: 前一个状态（用于 useActionState）
// formData: 表单数据对象
export default async function createTopic(prevState: CreateTopicFormState, formData: FormData):Promise<CreateTopicFormState>{
    // 从表单数据中获取 name 字段的值
    const name = formData.get("name")
    // 从表单数据中获取 description 字段的值
    const description = formData.get("description")

    // 使用 safeParse 安全地校验数据，不会抛出异常
    const result = createTopSchema.safeParse({name, description})

    // 检查校验是否失败
    if(!result.success){
        // 在控制台输出错误信息用于调试
        console.log(result.error.flatten().fieldErrors)
        // 返回扁平化的错误信息给客户端
        // flatten() 将嵌套的错误对象转换为简单的字段错误格式
        return {errors: result.error?.flatten().fieldErrors}
    }


    //校验用户登录状态
    const session = await auth()
    if (!session || !session.user){
        return {errors: {_form: ["请先登录"]}}
    }
    
    // 校验成功，返回空错误对象
    return {errors: {}}

}