import React from 'react'

const Repos = (props) => {

    console.log();
    
    const openRepo =(name, repoName)=>{
         window.open(`https://github.com/${name}/${repoName}`, "_blank")
    }

  return (
     <div id='repoBox' className='sm:h-[90%]  sm:grid sm:grid-cols-2  sm:gap-y-2 sm:pl-3.5 sm:pt-2 sm:pb-3 sm:overflow-y-scroll'>
                
                {
                  props.userRepo.map((elem ,idx)=>{

                  return (
                    <div key={idx} className='border border-[#5EEAD4] px-3 leading-5.5 bg-[#042f2e]  py-1 rounded-xl my-4 sm:my-0 sm:py-3 sm:w-[92%]   shrink-0 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out'>
                      <h3 className='text-white sm:text-lg font-semibold   '><a onClick={()=>{
                        openRepo(elem.owner.login, elem.name)
                      }} className='hover:text-[#5EEAD4] hover:underline cursor-pointer'>{elem.name}</a></h3>
                      <h3 className=' text-[#5EEAD4]'>{elem.language}</h3>
                      <h3 className='text-slate-200'>{elem.description}</h3>
                      <h3 className='text-slate-300 text-sm'>Stars: {elem.stargazers_count} | Forks: {elem.forks_count}</h3>
                      <p className='text-slate-400 text-xs'>Updated: {elem.updated_at.split("T")[0]}</p>
                    </div>  
                    )
                  })
                }

            
        </div>
  )
}

export default Repos
