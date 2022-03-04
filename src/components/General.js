import React from 'react'

const EnterKeyInput = ({children, onKeyPress}) => {
    const checkKeyPressed = (e) => {
        if (e.which === 13) {
            onKeyPress()
        }
    }

    return (
        <>
            {React.cloneElement(
                React.Children.only(children),
                {onKeyPress: checkKeyPressed}
            )}
        </>
    )
}

const TextInput = ({value, onChange, placeholder, type, onKeyPress}) => {
    return (
        <input
        onKeyPress={onKeyPress}
        type={type}
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

const BottomMargin = ({children}) => {
    return <div className="mb-1">{children}</div>
}

export {
    EnterKeyInput,
    Button,
    TextInput,
    BottomMargin
}
