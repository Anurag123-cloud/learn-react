

import { useState } from 'react'
import './App.css'

function App() {
  
const[color ,setColor]=useState("yellow")


return(
<>
  <div className=' w-full h-screen' style={{backgroundColor:color}}></div>
  <div className='flex flex-wrap fixed bottom-12 inset-x-0 justify-center px-2  '>
  <div className='bg-purple-600 p-2 rounded-lg'>
  <button className=' m-2 p-2 bg-[red] rounded-lg text-white font-medium'  onClick={()=>setColor("red")}>change</button>
  <button className=' m-2 p-2 bg-[blue] rounded-lg text-white font-medium' onClick={()=>setColor("blue")}>change</button>
  <button className='m-2 p-2 bg-[green] rounded-lg text-white font-medium' onClick={()=>setColor("green")}>change</button>
  <button className='p-2 m-2 bg-[orange] rounded-lg text-white font-medium' onClick={()=>setColor("orange")}>change</button>
  </div>   
  </div> 
  
  </>
)
}

export default App
