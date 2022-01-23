import {useContext} from 'react'
import {DeleteVideoContext} from './VideoGallery'

const Youtube = ({videos}) => {
    return (
        <div className="flex place-content-start flex-wrap m-2">
        {videos.map((v) => <YoutubeVideo key={v.id} videoId={v.videoId} id={v.id}/>)}
        </div>
    )
}

const YoutubeVideo = ({videoId, id}) => {
    const deleteVideo = useContext(DeleteVideoContext)

    return (
        <div className="relative m-1">
            <iframe className="focus-visible:outline-none" width={480} height={270} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <button className="bg-stone-600 px-2 opacity-50 absolute top-0 right-0" onClick={() => deleteVideo(id)}>X</button>
        </div>
    )
}
export default Youtube
