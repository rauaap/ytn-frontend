import {useContext} from 'react'
import {DeleteVideoContext} from '../App'

const Youtube = ({videos}) => {
    return (
        <div className="column-container">
        {videos.map((v) => <YoutubeVideo key={v.id} videoId={v.videoId} id={v.id}/>)}
        </div>
    )
}

const YoutubeVideo = ({videoId, id}) => {
    const deleteVideo = useContext(DeleteVideoContext)

    return (
        <div className="video-controls-container">
            <iframe className="youtube-video" width={480} height={270} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className="remove-button" onClick={() => deleteVideo(id)}>X</div>
        </div>
    )
}
export default Youtube
