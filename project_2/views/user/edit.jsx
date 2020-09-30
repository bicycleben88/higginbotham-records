const React = require('react');
const Layout = require('../Layout');

class Edit extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Layout>
                <h1>Edit your page {user.name}</h1>
                <form action={`/user/edit/${user._id}?_method=PUT`} method="POST">
                    Name: <input type="text" defaultValue={user.name} name="name"/>
                    Favorite Album: <input type="text" defaultValue={user.favoriteAlbum} name="favoriteAlbum"/>
                    Image: <input type="text" defaultValue={user.image} name="image"/>
                    {/* Password: <input type="text" name="password"/> */}
                    <input type="submit" defaultValue="Update Profile"/>
                </form>
                
            </Layout>
        );
    }
}

module.exports = Edit;