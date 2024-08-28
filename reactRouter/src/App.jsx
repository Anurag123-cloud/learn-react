
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import { ThemeProvider } from './Theme'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] =useState("light")

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  const lightTheme=()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className='dark:bg-gray-800'>
     <Header/>
     <Outlet/>
     <Footer/>
     </div>
    </ThemeProvider>
  )
}

export default App
