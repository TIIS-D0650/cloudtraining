import React from 'react'

const TaskEditIdPage = ({ params }: {
    params: { id: string }
    }) => {
  return (
    <div>
      {params.id}のタスク編集ページ
    </div>
  )
}

export default TaskEditIdPage
