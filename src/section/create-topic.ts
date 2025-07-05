"use server"
import {z} from "zod"

// 定义校验规则
const createTopSchema = z.object({
    name: z.string().min(3).regex(/^[a-zA-Z0-9]+$/, {message: "aaaa"}),   
    //长度最小3位  regex定义只能输入字母和数字  message定义错误提示
    description: z.string().min(10).max(100)
})

export default async function createTopic(formData: FormData){
    const name = formData.get("name")
    const description = formData.get("description")

    const result = createTopSchema.safeParse({name, description})   //校验

    if(!result.success){
        console.log(result.error.flatten().fieldErrors)   // flatten() 将错误信息扁平化
    }

    // console.log(result.data)  

}