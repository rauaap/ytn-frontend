import loginServices from '../services/login'
import UserAction from './UserAction'

const Login = ({setToken}) => {
    const login = (username, password, setters) => {
        loginServices.login({
            'username': username,
            'password': password,
        })
        .then(user => {
            window.localStorage.token = user.token
            setToken(user.token);
        })
        .catch(() => {alert('Wrong username or password')})
    }

    return (
        <UserAction
        sendUserInput={login}
        form={1}
        navigation="register"
        action="login"/>
    )
}

export default Login
