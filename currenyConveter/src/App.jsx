import { useState } from "react";
import {Input} from "./component";
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
 const[amount ,setAmount]=useState(0);
 const [convertedAmount,setConvertedAmount]=useState(0);
 const [from,setFrom]=useState("USD");
 const [to,setTo]=useState("INR");

 const currentInfo=useCurrencyInfo(from);
 const option=Object.keys(currentInfo)
 const swap=()=>{
  setTo(from)
  setFrom(to)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert=()=>{
  setConvertedAmount(amount*currentInfo[to]);
}




  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center
     items-center bg-cover bg-no-repeat bg-hero-pattern">

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border 
        border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault();
            }}>
            <div className="w-full mb-1">
              <Input label={"From"}
              amount={amount}
              currencyOptions={option}
              onAmountChange={(amount)=>setAmount(amount)}
              onCurrencyChange={(amount)=>{setAmount(amount)}}
              selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button  onClick={swap} className="absolute left-1/2 -translate-y-1/2 
              -translate-x-1/2 border-2 border-white bg-blue-700 text-white rounded-lg px-2 py-1.5">swap</button>
            </div>
            <div className="w-full mb-1">
              <Input label={"to"} 
              amount={convertedAmount}
              currencyOptions={option}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
               />
              
            </div>
            <div className="">
            <button onClick={convert} type="submit" className="w-full bg-blue-500
             text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
             </button>
            </div>
          </form>
        </div>
      </div>


     </div>
      
    </>
  )
}

export default App
