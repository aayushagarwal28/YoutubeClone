import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

 const [searchText, setsearchText] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 const [showSuggestions, setShowSuggestions] = useState(false);
 const searchCached = useSelector(state => state.search);
 const dispatch= useDispatch();

 const toggleMenuHandler= ()=>{
    dispatch(toggleMenu())
 }

 useEffect(()=>{

  const hideSuggestion = ()=>{
    setShowSuggestions(false);
  }

  window.addEventListener('scroll',hideSuggestion);
  return (()=>{
    window.removeEventListener('scroll',hideSuggestion);
  })
 },[])


 //debouncing with react.js 
 useEffect(() => {
    const getSearchSuggestions= async ()=>{
       const response= await fetch(`http://localhost:8000/search?q=${searchText}`);
       const responseData= await response.json();
       setSuggestions(responseData[1]);
       setShowSuggestions(true);

       dispatch(cacheResults({
        [searchText]: responseData[1]
       }));

    }

   const timer = setTimeout(()=>{
    if(searchCached[searchText]){
      setSuggestions(searchCached[searchText]);
      setShowSuggestions(true);
    }
    else
    getSearchSuggestions();
   },300)
 
   return () => {
    //every time user types search text, component remounts . 
    // So, a timer is reset 
    // And new setTimeout is created .
     clearTimeout(timer);

   }
 }, [searchText])
 
 // Debouncing with js 
    // const handleChange = (event) => {
    //     console.log("Input --", event.target.value);

    // }

    // const debounce = (fn, delay) => {
    //     let interval;
    //     return function (args) {

    //   //    console.log("Args--",args);
    //         clearTimeout(interval);

    //         interval = setTimeout(() => {
    //             fn.call(this,args);

    //         }, delay);

    //     }
    // }

    // const handleChangeOptimised = debounce(handleChange, 3000);





  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()} className='h-10 cursor-pointer' alt="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" ></img>
            <a href="/"><img className='h-10 mx-2' atlt="Youtube" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"></img></a>
        </div>
        <div className='col-span-10'>
          <div>
            <input className='w-1/2 border border-gre-100 p-2 rounded-l-full' 
            onFocus={()=>setShowSuggestions(true)} 
            onBlur= {()=>setShowSuggestions(false)}
            placeholder='Search' type='text' onChange={(e)=>setsearchText(e.target.value)}/>
            <button className='border border-grey-400 py-2 px-5 rounded-r-full' >Search</button>
           </div>

           { suggestions && suggestions.length > 0 &&  showSuggestions &&
           <div className='fixed py-2 px-5 bg-white w-[29rem] shadow-lg rounded-lg border border-gray-100' >
              <ul>
                {suggestions && suggestions.length > 0 &&   suggestions.map((item,index)=>(
                  <li key={item} className='py-2 shadow-sm hover:border-gray-100'>{item}</li>
                ))}
              
              </ul>

            </div>
           }
        </div>
        <div className='col-span-1'>
            <img className='h-10' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User"/>
        </div>
    </div>
  )
}

export default Head