import React from 'react'

const VideoCard = ({video}) => {


    const {snippet,statistics}= video;
    const {thumbnails,title,channelTitle}= snippet;
  return (
    <div className='p-2 m-2 shadow-lg w-64'>
        <img src={thumbnails.high.url} alt="Video banner" className='cursor-pointer rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

    </div>
  )
}

export default VideoCard