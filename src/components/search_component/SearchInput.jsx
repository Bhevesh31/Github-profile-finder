import React, { useRef, useState } from 'react'

const SearchInput = (props) => {

    const [inputName, setInputName] = useState("")

    const inputRef = useRef(null)

    const formHandler=(e)=>{
        e.preventDefault();
        if(inputName===""){
            inputRef.current.focus();
        }
        setInputName("");

        props.setUsername(inputName)
        
    }

  return (
    <div className='h-[25%] sm:h-[25%] flex items-center justify-center sm:justify-between pt-10 sm:pt-5 gap-4 flex-col  '>
            <h1 className='text-xl sm:mt-1.5 text-slate-100 sm:text-3xl'>Github Profile Finder</h1>
            
       
        
        <form onSubmit={(e)=>
            {formHandler(e)}
            } className='flex gap-4 flex-col sm:flex-row mt-2 sm:mt-0 justify-center items-center'>
            <input ref={inputRef} value={inputName} onChange={(e)=>{
                setInputName(e.target.value);               
            }} className='border text-slate-100 bg-[#115E59] sm:w-120 border-[#0F766E]  px-2 py-2 sm:px-2.5 rounded-xl sm:py-2.5 focus:outline-3 focus:outline-[#5EEAD4]  placeholder-slate-300 ' type="text" placeholder=' Search username' />

            <button className='w-[40%] sm:w-[32%] px-1 sm:px-0 py-1.25  sm:py-2  text-sm sm:text-lg bg-teal-600 hover:bg-teal-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95  '>Search</button>
        </form>
          
      </div>
  )
}

export default SearchInput
