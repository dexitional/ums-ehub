import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../utils/authService';

const user = useUserStore.getState().user
const dricRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric')

const AISRoute:any =  { 

}

export default AISRoute