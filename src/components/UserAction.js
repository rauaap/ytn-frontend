import HCaptcha from '@hcaptcha/react-hcaptcha';
import {useState, useContext} from 'react'
import {SetUserFormContext} from '../App'
import {EnterKeyInput, Button} from './General'

const UsernamePasswordInput = ({type, onChange, value, placeholder, onKeyPress}) => {
    return (
        <input
        className="rounded mb-2 bg-stone-600 placeholder-stone-500 p-1.5"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        >
        </input>
    )
}

const UserAction = ({sendUserInput, action, navigation, form}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const setUserForm = useContext(SetUserFormContext)
    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }

    const submitForm = () => sendUserInput(
        ...[username, password, token].filter((v) => v !== null),
        [setUsername, setPassword]
    )

    return (
        <>
        <button className="absolute top-1 right-2"
        onClick={() => {setUserForm(form)}}>
            {navigation}
        </button>
        <div className="flex justify-center items-center h-screen v-screen">
            <div>
                <UsernamePasswordInput
                onChange={(e) => handleInputChange(e, setUsername)}
                value={username}
                type="text"
                placeholder="username"
                /><br/>
                <EnterKeyInput
                InputComponent={UsernamePasswordInput}
                onChange={(e) => handleInputChange(e, setPassword)}
                value={password}
                type="password"
                placeholder="password"
                onKeyPress={submitForm}
                /><br/>
                {form ? null :
                <HCaptcha
                sitekey="a6f9202c-4170-4f0f-b3cd-de589d54f1d0"
                onVerify={token => setToken(token)}/>
                }
                <Button
                onClick={submitForm}
                text={action}
                />
            </div>
        </div>
        </>
    )
}

export default UserAction
