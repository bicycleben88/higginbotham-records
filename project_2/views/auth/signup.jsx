const React = require('react');
const Layout = require('../Layout');

class SignUp extends React.Component {
    render() {
        return (
            <Layout title="Sign Up">
                <div className="sign-up-container">
                    <form action="/auth/signup" method="POST" className="sign-up-form">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="favoriteAlbum" placeholder="Favorite Album"/>
                        <input type="text" name="image" placeholder="Image Url"/>
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="text" name="password" placeholder="Password"/>
                        <input type="submit" value="Create User" className="button"/>
                    </form>
                </div>

            </Layout>
        );
    }
}

module.exports = SignUp