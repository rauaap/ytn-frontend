import UserAction from './UserAction'
import userServices from '../services/user'
import {clearInputs} from '../helpers/helpers'

const Register = () => {
    const register = (username, password, setters) => {
        userServices.register({
            'username': username,
            'password': password,
        })
        .then(() => clearInputs(setters))
        .then(() => alert(`Registered with username ${username}`))
        .catch(({response}) => {
            alert(response.data.error)
        })
    }

    return (
        <UserAction
        sendUserInput={register}
        form={0}
        navigation="login"
        action="register"/>
    )
}

export default Register
