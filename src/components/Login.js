import {useNavigate} from 'react-router-dom'
import loginServices from '../services/login'
import UserAction from './UserAction'

const Login = ({setToken}) => {
    const navigate = useNavigate();

    const login = (username, password, setters) => {
        loginServices.login({
            'username': username,
            'password': password,
        })
        .then(user => {
            window.localStorage.token = user.token
            setToken(user.token);
        })
        .then(() =>  navigate('/') )
        .catch(({response}) => {alert(response.data.error)})
    }

    return (
        <UserAction
        sendUserInput={login}
        form={1}
        navigation="/register"
        navigationLabel="Register"
        action="login"/>
    )
}

export default Login
