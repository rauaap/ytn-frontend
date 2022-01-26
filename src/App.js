import {useState, useEffect, createContext} from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import VideoGallery from './components/VideoGallery'

export const SetUserFormContext = createContext()

const App = () => {
    const [token, setToken] = useState(window.localStorage.token)
    const [userForm, setUserForm] = useState(0)

    const logout = () => {
        window.localStorage.clear()
        setToken(undefined)
    }

    return (
        token === undefined ?
        <SetUserFormContext.Provider value={setUserForm}>
            {userForm ?
            <Register setUserForm={setUserForm}/> :
            <Login setToken={setToken}/>}
        </SetUserFormContext.Provider>
        :
        <>
            <button
            onClick={logout}
            className="absolute top-1 right-2"
            >logout</button>
            <VideoGallery token={token} logout={logout}/>
        </>
    )
}
export default App;
