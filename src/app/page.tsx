import React from 'react'
import TopicCreateForm from '@/components/topic-create-form'



export default function Page() {
  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='text-xl mt-2'>Top Pops</h1>
      </div>

      <div>
        <TopicCreateForm />
      </div>
    </div>
  )
}
  