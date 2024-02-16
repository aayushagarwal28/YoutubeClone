import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videos = await data.json();
    setVideos(videos.items)

  }
  useEffect(() => {
    
    getVideos();
   
  }, [])
  
  console.log(" vIDEOS",videos)
  return (
    <div className='flex flex-wrap'>
        {
             videos.map((video,index)=>(
                <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard video={video} /></Link>
            ))
        }
    </div>
  )
}

export default VideoContainer