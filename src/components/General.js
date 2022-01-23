const EnterKeyInput = ({InputComponent, type, onChange, value, placeholder, onKeyPress}) => {
    const checkKeyPressed = (e) => {
        if (e.which === 13) {
            onKeyPress()
        }
    }

    return (
        <InputComponent
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyPress={checkKeyPressed}
        />
    )
}

const TextInput = ({value, onChange, placeholder}) => {
    return (
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-1.5 rounded bg-stone-600 placeholder-stone-500"
        ></input>
    )
}

const Button = ({onClick, text}) => {
    return (
        <button
        className="bg-stone-300 text-stone-900 px-1.5 rounded-md"
        onClick={onClick}
        >
            {text}
        </button>
    )
}

export {
    EnterKeyInput,
    Button,
    TextInput
}
