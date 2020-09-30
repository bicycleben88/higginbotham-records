const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Layout>
                <h1>Welcome to the user page {user.name}</h1>
                <a href="/records">home</a>
                <img src={user.image} alt="profile picture"/>
                <h3>Favorite Album:</h3>
                <p>{user.favoriteAlbum}</p>
                <a href="/auth/logout"><button>Log Out</button></a>
                <a href={`edit/${user._id}`}><button>Update Profile</button></a>
                <form action={`/user/${user._id}?_method=DELETE`} method="post">
                    <input type="submit" defaultValue="Delete Profile"/>
                </form>
            </Layout>
        );
    }
}

module.exports = Show;