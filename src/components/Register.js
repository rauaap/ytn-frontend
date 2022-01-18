import UserAction from './UserAction'
import userServices from '../services/user'

const Register = () => {
    const register = (username, password) => {
        userServices.register({
            'username': username,
            'password': password,
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <UserAction
            onClick={register}
            form={0}
            navigation="login"
            action="register"/>
        </>
    )
}

export default Register
