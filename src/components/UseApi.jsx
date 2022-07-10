import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useApi = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    
    const doFetch = async() =>{
        try{
        const response = await axios.get(url);
        setData(response.data[0])   
    }catch(error){
        setError(error)
    }
    setIsLoading(false)
    }
    
    useEffect(()=>{
        setInterval(() => {
      doFetch();  
    }, 1000); 
    },[]);

    return {
         data,
         error,
         isLoading,
    }
}

export default useApi