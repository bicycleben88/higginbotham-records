const React = require('react');
const Layout = require('../Layout');

class Edit extends React.Component {
    render() {
        const { user } = this.props
        return (
            <Layout>
                <div className="edit-user-container">
                    <form action={`/user/edit/${user._id}?_method=PUT`} method="POST" className="edit-user-form">
                        <input type="text" defaultValue={user.name} name="name"/>
                        <input type="text" defaultValue={user.favoriteAlbum} name="favoriteAlbum"/>
                        <input type="text" defaultValue={user.image} name="image"/>
                        <input type="submit" defaultValue="Update Profile" className="button"/>
                    </form>
                </div>
                
            </Layout>
        );
    }
}

module.exports = Edit;