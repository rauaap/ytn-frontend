import {useState, useEffect, createContext} from 'react'
import './App.css'
import Youtube from './components/Youtube'
import Login from './components/Login'
import Register from './components/Register'
import videoService from './services/video'

export const DeleteVideoContext = createContext()
export const SetUserFormContext = createContext()

const App = () => {
    const [videos, setVideos] = useState([])
    const [token, setToken] = useState(window.localStorage.token)
    const [userForm, setUserForm] = useState(0)
    useEffect(() => {
        videoService.setToken(token)
    }, [token])

    useEffect(() => {
        if (!token) {
            return
        }
        videoService.getVideos()
            .then((videoList) => setVideos([...videoList]))
    }, [token])

    const [newVideo, setNewVideo] = useState('')
    const handleNewVideoChange = (e) => setNewVideo(e.target.value)

    const addNewVideo = () => {
        const regExpLink = new RegExp(/((?<=\.be\/)|(?<=watch\?v=))[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]/)
        const newVideoId = newVideo.match(regExpLink)[0]
        if (!newVideoId) {
            return
        }
        videoService.postVideo(newVideoId).then(postedVideo => {
            setVideos([
                ...videos,
                {videoId: postedVideo.videoId, id: postedVideo.id}
            ])
            setNewVideo('')
        })
    }

    const deleteVideo = (id) => {
        videoService.deleteVideo(id)
            .then(() => {setVideos(videos.filter( v => v.id !== id))})
            .catch((error) => console.log(error))
    }

    return (
        token === undefined ?
        <SetUserFormContext.Provider value={setUserForm}>
            {userForm ?
            <Register /> :
            <Login setToken={setToken}/>}
        </SetUserFormContext.Provider>
        :
        <>
            <input type="text" value={newVideo} onChange={handleNewVideoChange}/>
            <button onClick={addNewVideo}>Add</button>
            <button
            className="linkalike"
            onClick={() => {
                window.localStorage.clear()
                setToken(undefined)
                setVideos([])
            }}>Logout</button>
            <DeleteVideoContext.Provider value={deleteVideo}>
            {videos.length ?
            <Youtube className="column-container" videos={videos}/>
            : null}
            </DeleteVideoContext.Provider>
        </>
    )
}
export default App;
