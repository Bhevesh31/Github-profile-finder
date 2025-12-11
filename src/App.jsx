import React, { useEffect, useState } from 'react'
import SearchInput from './components/search_component/SearchInput'
import Profile from './components/profileCard/Profile'
import axios from 'axios'
import ErrorMessage from './components/error_msg/ErrorMessage'
import Loader from './components/loadingIcon/Loader'
import SearchUser from './components/searchUserName/SearchUser'

const App = () => {

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [userRepo, setUserRepo] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [repoLoading, setRepoLoading] = useState(false)
  const [firstRender, setFirstRender] = useState(true)


  const fetchRepoData = async()=>{
        setUserRepo([]);
        setRepoLoading(true)
    try{
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserRepo(response.data);
      setFirstRender(false);
      setRepoLoading(false)

    }
    catch(error){
      console.log(error);
      setRepoLoading(false)
      
    }
  }


  const fetchData =async()=>{
      if(username==="") return;
      setFirstRender(false)
      setIsLoading(true)
    try {
      
      const response = await axios.get(`https://api.github.com/users/${username}`);
      fetchRepoData();
      setUserData(response.data);
      setIsLoading(false)
      setErrorMessage(false)     
      console.log("fetched");
      
       

      
    } 
    catch (error) {
      setIsLoading(false)
      setErrorMessage(true)
      setFirstRender(false)
      
    }
    
  }

  
    useEffect(() => {
      fetchData();

      console.log("hey");
      
      
    
      return () => {
        setUsername('')

      }
    }, [username])
    


  return (
    <div className='h-screen'>
      
      <SearchInput username = {username} setUsername ={setUsername} />


      {(errorMessage && !isLoading) && <ErrorMessage/>}

      {(!errorMessage&& !firstRender && !isLoading && userData.length !==0)&& <Profile userData={userData} setUserData = {setUserData} userRepo={userRepo} repoLoading={repoLoading}/>}

      {(isLoading) && <Loader/>}
      
      {firstRender && <SearchUser/>}

      {/* {!firstRender&& <Profile userData={userData} setUserData = {setUserData} userRepo={userRepo}/>} */}

  
    </div>
  )
}

export default App
