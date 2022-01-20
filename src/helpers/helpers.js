export const requestDecorator = (func) => {
    return (arg) => func.call(this, arg).then(response => response.data)
}

export const clearInputs = (inputSetters) => {
    inputSetters.forEach(setter => setter(''))
}
