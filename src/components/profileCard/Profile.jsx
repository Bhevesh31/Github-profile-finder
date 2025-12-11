import React from 'react'
import ProfileCard from './ProfileCard'
import Repositories from '../repositoryPage/Repositories'

const Profile = (props) => {
  return (
    <div className='h-full sm:h-[70%] sm:flex sm:mt-[2%] sm:justify-center sm:gap-7 '>
        <ProfileCard userData = {props.userData} setUserData = {props.setUserData} />
        <Repositories userRepo = {props.userRepo} repoLoading = {props.repoLoading}/>

          
      </div>
  )
}

export default Profile
