import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from '../utils/constants';

const commentData = [
    {
        name: "Ajay",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
            {
                name: "manveer",
                text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: [
                    {
                        name: "amit",
                        text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: []
                    },
                    {
                        name: "raman",
                        text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: []
                    }
                ]
            },
            {
                name: "abhay",
                text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: [
                    {
                        name: "amit",
                        text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: [
                            {
                                name: "amit",
                                text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                replies: []
                            },
                            {
                                name: "raman",
                                text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                replies: []
                            }
                        ]
                    },
                    {
                        name: "raman",
                        text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "abhay",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
            {
                name: "amit",
                text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: [
                    {
                        name: "amit",
                        text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: []
                    },
                    {
                        name: "raman",
                        text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replies: []
                    }
                ]
            },
            {
                name: "raman",
                text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: []
            }
        ]
    },
    {
        name: "jay",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        replies: [
            {
                name: "amit",
                text: "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: []
            },
            {
                name: "raman",
                text: "r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                replies: []
            }
        ]
    }
]


const Comment = ({data})=>{
    const {name,text,replies}= data;



    return(
        <div className='flex p-2 m-2 bg-gray-100 shadow-sm rounded-lg'>
             <img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User"/>
             <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
             </div>
        </div>
    )
}

const CommentList = ({data})=>{
return data.map((comment,index)=>(
<div key={index}>
<Comment  data={comment} />
{
    <div className='pl-5 border border-l-black ml-5'>
        <CommentList data={comment.replies}/>
    </div>
}
</div>
))
}

const CommentsContainer = () => {
    

    const [comments, setComments] = useState([]);

    // const getComments = async ()=>{
    //   const data = await fetch(COMMENTS_API);
    //   const response = await data.json();

    //   setComments(response)
  
    // }
    // useEffect(() => {
      
    //     getComments();
     
    // }, [])
    
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentList data={commentData} />
    </div>
  )
}

export default CommentsContainer