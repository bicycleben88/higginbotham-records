const React = require('react');
const Layout = require('../Layout');

class SignUp extends React.Component {
    render() {
        return (
            <Layout title="Sign Up">
                <h1>SignUp Page</h1>
                <div className="sign-up-container">
                    <form action="/auth/signup" method="POST" className="sign-up-form">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="favoriteAlbum" placeholder="Favorite Album"/>
                        <input type="text" name="image" placeholder="Image Url"/>
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="text" name="password" placeholder="Password"/>
                        <input type="submit" value="Create User"/>
                    </form>
                </div>

            </Layout>
        );
    }
}

module.exports = SignUp