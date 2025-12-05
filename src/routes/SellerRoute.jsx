import React from 'react';
import useRoles from '../hooks/useRoles';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router';

const SellerRoute = ({children}) => {
    const{role , roleLoading}=useRoles()
  if(roleLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  if(role === 'seller'){
    return children
  }
  return <Navigate to={'/'}></Navigate>
};

export default SellerRoute;