import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/liveChatSlice';

const LiveChat = () => {

  const dispatch = useDispatch();

  const messages = useSelector(store => store.chat.messages);

  const [inputMessage, setInputMessage] = useState("")
  useEffect(() => {
   
    const interval = setInterval(()=>{
      // API polling 

      const apiUrl = `
      https://www.youtube.com/youtubei/v1/live_chat/get_live_chat?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false`;

      dispatch(addMessage({
        name: "Ajay",
        message: "hello , u are watching a  video"
      }));

    },2000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  const handleSubmitMessage = (e)=>{
    e.preventDefault();
    dispatch(addMessage({
      name: "Ajay",
      message: inputMessage
    }));

    setInputMessage("");
  }
  
  return (
    <div className='flex flex-col w-1/3 h-[420px]'>
    <div className='ml-2 p-2 border border-black  h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
   {
    messages.map(chat =>(
      <ChatMessage name={chat.name} message={chat.message}/>
    ))
   }
    </div>
    <form className='ml-2  w-full'>
      <input type="text" value={inputMessage} className='w-80 border border-black' onChange={(e)=> setInputMessage(e.target.value)}></input>
      <button  onClick={handleSubmitMessage} className='px-2 mx-2 bg-green-100' type='submit'>Send</button>
    </form>
    </div>
  )
}

export default LiveChat