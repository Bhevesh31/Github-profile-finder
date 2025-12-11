import React from 'react'
import Repos from './Repos';
import NoRepos from './NoRepos';
import RepoLoader from './RepoLoader';

const Repositories = (props) => {


  
  return (
    <div className=' sm:h-[94%] sm:w-[55%] border-t sm:border mt-6 sm:mt-0 bg-[#115E59]  sm:border-[#0F766E] sm:rounded-xl sm:shadow-md
  p-4 sm:pt-2'>
        <div className='w-full sm:border-b sm:pb-1 sm:h-[10%] sm:bg-transparent flex justify-center  items-center text-2xl mb-3 text-slate-100'><h1>Repositories</h1></div>

          
           {(props.userRepo.length !==0) && <Repos userRepo = {props.userRepo}/> } 
           {props.repoLoading&& <RepoLoader/>}
           {(!props.repoLoading && props.userRepo.length ===0) &&<NoRepos/>}
        
    </div>
  )
}

export default Repositories
