import axios from 'axios'
import {requestDecorator} from '../helpers/helpers'
const baseUrl = '/api/login'

const login = (loginObj) => {
    return axios.post(baseUrl, loginObj)
}

const services = {
    login: requestDecorator(login)
}

export default services
