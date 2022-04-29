import {useState} from "react";


export const useFetching = (cb)=>{
  const [isLoading, setIsLoading] = useState(null)
  const [err, setErr] = useState(null)

  const fetching = async (...args)=>{
    try{
      setIsLoading(true)
      await cb(...args)
    }catch (e){
      setErr(e)
    }finally {
      setIsLoading(false)
    }
  }


  return [fetching, isLoading, err]
}