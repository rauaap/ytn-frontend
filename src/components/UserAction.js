import {useState, useContext} from 'react'
import {SetUserFormContext} from '../App'

const UserAction = ({onClick, action, navigation, form}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const setUserForm = useContext(SetUserFormContext)
    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }

    return (
        <div className="big-container">
        <div className="inline-form">
            <input
            onChange={(e) => handleInputChange(e, setUsername)} value={username}
            type="text"
            placeholder="username"></input><br/>
            <input
            onChange={(e) => handleInputChange(e, setPassword)}
            value={password} type="password"
            placeholder="password"></input><br/>
            <div className="form-buttons-container">
                <button onClick={() => onClick(username, password)}>{action}</button>
                <button className="linkalike" onClick={() => {setUserForm(form)}}>{navigation}</button>
            </div>
        </div>
        </div>
    )
}

export default UserAction
