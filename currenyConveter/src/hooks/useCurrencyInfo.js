import { useEffect } from 'react'
import {useState} from 'react'

const useCurrencyInfo = (currency) => {
    const [data,setData]=useState({})
 
   useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/a1a93f3611cb52979361709d/latest/${currency}`)
    .then((resp)=>resp.json())
    .then((resp)=>setData(resp.conversion_rates))
    
   },[currency])
   console.log(data)
   return data;
}

export default useCurrencyInfo
