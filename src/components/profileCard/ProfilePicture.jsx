import React from 'react'

const ProfilePicture = (props) => {
  return (
    <div className='pt-3 sm:pt-1 w-full flex flex-col items-center justify-center sm:items-start sm:gap-1'>
        <div></div>
        <img className='h-15 w-15 rounded-full border-4 border-[#5EEAD4]' src={props.userData.avatar_url} alt="" />
        <h4 className='text-[#5EEAD4] sm:mt-1 text-sm'>@{props.userData.login}</h4>
        <h3 className='text-xl sm:text-2xl font-bold text-white'>{props.userData.name}</h3>
            
    </div>
  )
}

export default ProfilePicture
