import {useState, useEffect, createContext} from 'react'
import videoService from '../services/video'
import Youtube from './Youtube'
import {TextInput, EnterKeyInput, Button} from './General'

export const DeleteVideoContext = createContext()

const VideoGallery = ({token}) => {
    const [videos, setVideos] = useState([])
    const [newVideo, setNewVideo] = useState('')
    const handleNewVideoChange = (e) => setNewVideo(e.target.value)

    useEffect(() => {
        videoService.setToken(token)
        if (!token) {
            return
        }
        videoService.getVideos()
            .then((videoList) => setVideos([...videoList]))
            .catch(error => {alert('login expired'); logout()})
    }, [token])

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
        <div className="m-2">
            <EnterKeyInput
            InputComponent={TextInput}
            value={newVideo}
            placeholder="youtube link"
            onChange={handleNewVideoChange}/>
            <span className="m-1">
            <Button
            text="add"
            onClick={addNewVideo}/>
            </span>
            <DeleteVideoContext.Provider value={deleteVideo}>
            {videos.length ?
            <Youtube videos={videos}/>
            : null}
            </DeleteVideoContext.Provider>
        </div>
    )
}

export default VideoGallery
