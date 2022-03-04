import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import VideoGallery from './components/VideoGallery'

const App = () => {
    const [token, setToken] = useState(window.localStorage.token)
    const [userForm, setUserForm] = useState(0)

    const logout = () => {
        window.localStorage.clear()
        setToken(undefined)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<VideoGallery token={token} logout={logout}/>} />
                <Route path="login" element={<Login setToken={setToken}/>} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
