import UserAction from './UserAction'
import userServices from '../services/user'
import {clearInputs} from '../helpers/helpers'

const Register = ({setUserForm}) => {
    const register = (username, password, token, setters) => {
        if (!token) {
            alert('please fill out captcha')
            return
        }
        userServices.register({
            username,
            password,
            token
        })
        .then(() => clearInputs(setters))
        .then(() => alert(`Registered with username ${username}`))
        .then(() => setUserForm(0))
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
