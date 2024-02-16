import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

const dispatch = useDispatch();
const [searchParams] = useSearchParams();
const videoId = searchParams.get('v')
useEffect(() => {
    dispatch(closeMenu());
}, [])

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5' >
        <div className='flex'>
          <div className='w-2/3'>
          <iframe width="800" height="400" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <LiveChat/>
        </div>
      </div>
      <div className='w-2/3'>
      <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage