export const requestDecorator = (func) => {
    return (arg) => func.call(this, arg).then(response => response.data)
}
