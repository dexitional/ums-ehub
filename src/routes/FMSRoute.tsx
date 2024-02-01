import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../utils/authService';

const user = useUserStore.getState().user
const fmsRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'fms')
  
const AISRoute:any =  { 

}

export default AISRoute