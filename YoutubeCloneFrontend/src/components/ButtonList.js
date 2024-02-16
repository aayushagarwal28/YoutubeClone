import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonList = ["All","Gaming","Live","Songs","News","Trending","Cricket"];
  return (
    <div className='flex'>
       {buttonList.map(button => <Button name={button}/>)}
    </div>
  )
}

export default ButtonList