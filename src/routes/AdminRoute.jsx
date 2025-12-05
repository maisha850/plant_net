import React from 'react';
import useRoles from '../hooks/useRoles';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router';

const AdminRoute = ({children}) => {
  const{role , roleLoading}=useRoles()
  if(roleLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  if(role === 'admin'){
    return children
  }
  return <Navigate to={'/'}></Navigate>
};

export default AdminRoute;