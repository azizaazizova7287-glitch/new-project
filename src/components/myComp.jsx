
const MyComponent = ({ user }) => {

    const renderMessage = () => {

        if (user) {
            return <h1>welcome, {user.name}</h1>
        } else {
            return <h1>iltimos royxatdan otin</h1>
        }
    }

    return (
        <div>{renderMessage()}
        </div>
    )
}

export default MyComponent