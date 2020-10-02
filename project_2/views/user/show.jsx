const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Layout title={user.name}>
                <h1>Welcome to your page {user.name}!</h1>
                <div className="show-user-container">
                    <img src={user.image} alt="profile picture"/>
                    <div>
                        <h3>Favorite Album:</h3>
                        <p>{user.favoriteAlbum}</p>
                    </div>
                    <aside>
                        <a href="/records/new"><button>Add Album</button></a>
                        <a href="/auth/logout"><button>Log Out</button></a>
                        <a href={`edit/${user._id}`}><button>Update Profile</button></a>
                        <form action={`/user/${user._id}?_method=DELETE`} method="post">
                            <input type="submit" defaultValue="Delete Profile"/>
                        </form>
                    </aside>
                </div>
            </Layout>
        );
    }
}

module.exports = Show;