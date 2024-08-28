import UserContetProvider from './context/UserContetProvider'
import './App.css'
import User from './component/User'
import Profile from './component/Profile'

function App() {


  return (
    <UserContetProvider>
     <h1>hello abufukduo  </h1>
     <User/>
     <Profile/>
    </UserContetProvider>
  )
}

export default App
