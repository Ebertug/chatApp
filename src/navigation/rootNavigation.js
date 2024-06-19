import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import app from '../../firebaseConfig';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const rootNavigation = () => {
  
  const { isAuth } = useSelector((state)=> state.user)
  console.log('>>> isAuth: ',isAuth)
  return (
    <NavigationContainer>
        
      {
        !isAuth ? <AuthStack/> : <UserStack/> 
      }

    </NavigationContainer>    
  )
}

export default rootNavigation

