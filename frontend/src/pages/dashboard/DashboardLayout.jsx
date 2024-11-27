import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getBaseUrl from '../../utils/baseURL';
import Loading from '../../components/Loading';

const DashboardLayout = () => {
    const [loading, setLoading] = useState(true);
    const [data,setData] =useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response=await axios.get(`${getBaseUrl()}/api/admin`,{
                    headers:{
                        'Authorization':`Bearer ${localStorage.getItem('token')}`,
                        'Content-Type':'Application/json'
                    },
                })
                
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:',error);
                
            }
        }

        fetchData();
    }, []);
    if(loading) return <Loading/>
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout