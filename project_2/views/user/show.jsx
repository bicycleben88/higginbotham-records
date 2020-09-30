const React = require('react');

class Show extends React.Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <h1>Welcome to the user page {user.name}</h1>
                <img src={user.image} alt="profile picture"/>
                <h3>Favorite Album:</h3>
                <p>{user.favoriteAlbum}</p>
                <a href="/auth/logout"><button>Log Out</button></a>
                <a href={`edit/${user._id}`}><button>Update Profile</button></a>
                <form action={`/user/${user._id}?_method=DELETE`} method="post">
                    <input type="submit" defaultValue="Delete Profile"/>
                </form>
            </div>
        );
    }
}

module.exports = Show;