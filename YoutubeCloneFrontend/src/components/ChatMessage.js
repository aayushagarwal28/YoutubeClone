import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex'>
         <img className='h-8 w-8' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User"/>
         <span className='font-bold px-2'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage