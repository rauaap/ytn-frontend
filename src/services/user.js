import axios from 'axios'
import {requestDecorator} from '../helpers/helpers'
const baseUrl = '/api/users'

const register = (userObj) => {
    return axios.post(baseUrl, userObj)
}

const services = {
    register: requestDecorator(register)
}

export default services
