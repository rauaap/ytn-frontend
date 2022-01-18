import loginServices from '../services/login'
import UserAction from './UserAction'

const Login = ({setToken}) => {
    const login = (username, password) => {
        loginServices.login({
            'username': username,
            'password': password,
        })
        .then(user => {
            window.localStorage.token = user.token
            setToken(user.token);
        })
    }

    return (
        <>
            <UserAction
            onClick={login}
            form={1}
            navigation="register"
            action="login"/>
        </>
    )
}

export default Login
