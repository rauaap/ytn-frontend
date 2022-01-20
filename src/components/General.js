const EnterKeyInput = ({type, onChange, value, placeholder, onKeyPress}) => {
    const checkKeyPressed = (e) => {
        if (e.which === 13) {
            onKeyPress()
        }
    }

    return (
        <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyPress={checkKeyPressed}
        >
        </input>
    )
}

export default EnterKeyInput
