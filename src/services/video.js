import axios from 'axios'
import {requestDecorator} from '../helpers/helpers'
const baseUrl = '/api/videos'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getVideos = () => {
    return axios.get(
        baseUrl,
        {headers: {Authorization: token}}
    )
}

const postVideo = (videoId) => {
    return axios.post(
        baseUrl,
        {videoId},
        {headers: {Authorization: token}}
    )
}

const deleteVideo = (id) => {
    return axios.delete(
        `${baseUrl}/${id}`,
        {headers: {Authorization: token}}
    )
}

const services = {
    getVideos: requestDecorator(getVideos),
    postVideo: requestDecorator(postVideo),
    deleteVideo: requestDecorator(deleteVideo),
    setToken
}

export default services
