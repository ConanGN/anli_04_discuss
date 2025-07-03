import { Button, Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
import React from "react";
import { Input, Textarea } from "@heroui/react";
import * as section from "@/section";



export default function TopicCreateForm(){
    return(
        
        <Popover placement="left">
            {/*   点击按钮触发，用PopoverTrigger包裹按钮 */}
        <PopoverTrigger> 
            <Button color="secondary" variant='bordered'>Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
        <form action={section.createTopic}>
            <div className="flex flex-col gap-4 p-4 w-80">
                <h3 className="text-lg font-bold">Create a Topic</h3>
                {/* heroui导入Input label文字name在外面展示=labelPlacement*/}
                <Input name="name" label="Name" labelPlacement="outside" placeholder="name" /> 
                {/* heroui导入Textarea */}
                <Textarea name="description" label="Description" labelPlacement="outside" placeholder="descript your topic" /> 
                <Button type="submit" color="primary">Submit</Button>
            </div>
        </form>
        </PopoverContent>
      </Popover>
    )
}