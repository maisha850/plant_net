import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query'

const useRoles = () => {
const{user, loading}=useAuth()
const axiosInstance = useAxiosSecure()
const{data:role , isLoading: roleLoading}=useQuery({
    enabled:!loading && !!user.email,
    queryKey:['role', user.email],
    queryFn:async()=>{
const {data}= await axiosInstance(`/users/role/${user.email}`)
return data.role
    }
})
return {role , roleLoading}
};

export default useRoles;