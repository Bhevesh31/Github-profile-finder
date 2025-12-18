import React from 'react'
import ProfilePicture from './ProfilePicture'

const ProfileCard = (props) => {


    const openGithub=()=>{
        window.open(`https://github.com/${props.userData.login}`, "_blank")
    }
  return (
    <div className='sm:border sm:border-[#0F766E] sm:rounded-xl sm:shadow-xl sm:h-[94%] sm:w-[35%] bg-[#134E4A] sm:flex justify-center items-center mt-8 sm:mt-0'>
        <div className=' h-full sm:w-[90%]    pt-4 px-3 flex flex-col items-start gap-3.5'>
            <ProfilePicture userData ={props.userData} />
            <div>
                <h3 className='text-slate-100
                '><span className='underline'>Bio:</span> {props.userData.bio }</h3>
            </div>
            <div className='flex gap-3 sm:mt-2  px-2 py-1  rounded-xl text-sm  w-full justify-center'>
                <div className='flex flex-col justify-center items-center border sm:font-semibold sm:px-2.5 sm:py-1  px-2 py-0.5 rounded-lg bg-[#0F766E] text-white'>
                    <h3>Repositories</h3>
                    <h4>{props.userData.public_repos}</h4>
                </div>
                <div className='flex flex-col justify-center items-center border sm:font-semibold sm:px-2.5 sm:py-1 px-2 py-0.5 rounded-lg bg-[#0F766E] text-white'>
                    <h3>Followers</h3>
                    <h4>{props.userData.followers}</h4>
                </div>
                <div className='flex flex-col justify-center items-center border sm:font-semibold sm:px-2.5 sm:py-1 px-2 py-0.5 rounded-lg bg-[#0F766E] text-white'>
                    <h3>Following</h3>
                    <h4>{props.userData.following}</h4>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <button onClick={openGithub} className='text-slate-100 bg-[#042f2e]  w-[60%] my-2.5 sm:my-1.5 py-1.5 sm:py-2 rounded-lg font-semibol sm:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'>View Profile</button>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileCard
