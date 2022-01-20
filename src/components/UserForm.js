import {useState, useContext} from 'react'
import {SetUserFormContext} from '../App'
import EnterKeyInput from './General'

const UserAction = ({sendUserInput, action, navigation, form}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const setUserForm = useContext(SetUserFormContext)
    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }
    const submitForm = () => sendUserInput(
        username,
        password,
        [setUsername, setPassword])

    return (
        <div className="big-container">
            <div>
                <input
                onChange={(e) => handleInputChange(e, setUsername)} value={username}
                type="text"
                placeholder="username">
                </input><br/>
                <EnterKeyInput
                onChange={(e) => handleInputChange(e, setPassword)}
                value={password} type="password"
                placeholder="password"
                onKeyPress={submitForm}
                /><br/>
                <div className="form-buttons-container">
                    <button onClick={submitForm}>
                        {action}
                    </button>
                    <button className="linkalike"
                    onClick={() => {setUserForm(form)}}>
                        {navigation}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserAction
