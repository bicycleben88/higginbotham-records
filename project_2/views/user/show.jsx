const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Layout title={user.name}>
                <div className="show-user-container">
                    <img src={user.image} alt="profile picture"/>
                    <div>
                        <h4>Welcome {user.name}!</h4>
                        <h4>Favorite Album:</h4>
                        <h1>{user.favoriteAlbum}</h1>
                    </div>
                    <aside>
                        <a href="/records/new"><button className="button">Add</button></a>
                        <a href="/auth/logout"><button className="button">LogOut</button></a>
                        <a href={`edit/${user._id}`}><button className="button">Update</button></a>
                        <form action={`/user/${user._id}?_method=DELETE`} method="post">
                            <input type="submit" defaultValue="Delete" className="button"/>
                        </form>
                    </aside>
                </div>
            </Layout>
        );
    }
}

module.exports = Show;