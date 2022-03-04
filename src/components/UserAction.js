import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {SetUserFormContext} from '../App'
import {EnterKeyInput, TextInput, Button, BottomMargin} from './General'

const UserAction = ({sendUserInput, action, navigation, navigationLabel, form}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }

    const submitForm = () => sendUserInput(
        ...[username, password, token].filter((v) => v !== null),
        [setUsername, setPassword]
    )

    return (
        <>
        <Link className="absolute top-1 right-2" to={navigation}>{navigationLabel}</Link>
        <div className="flex justify-center items-center h-screen v-screen">
            <div>
                <BottomMargin>
                    <TextInput
                    onChange={(e) => handleInputChange(e, setUsername)}
                    value={username}
                    type="text"
                    placeholder="username"
                    />
                </BottomMargin>
                <BottomMargin>
                    <EnterKeyInput onKeyPress={submitForm}>
                            <TextInput
                            onChange={(e) => handleInputChange(e, setPassword)}
                            value={password}
                            type="password"
                            placeholder="password"
                            />
                    </EnterKeyInput>
                </BottomMargin>
                {form ? null :
                <BottomMargin>
                    <HCaptcha
                    sitekey="a6f9202c-4170-4f0f-b3cd-de589d54f1d0"
                    onVerify={token => setToken(token)}/>
                </BottomMargin>
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
