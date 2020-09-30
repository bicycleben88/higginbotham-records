const React = require('react');
const Layout = require('../Layout');

class SignUp extends React.Component {
    render() {
        return (
            <Layout>
                <h1>SignUp Page</h1>
                <form action="/auth/signup" method="POST">
                    Name: <input type="text" name="name"/>
                    Favorite Album: <input type="text" name="favoriteAlbum" id=""/>
                    Image Url: <input type="text" name="image"/>
                    Username: <input type="text" name="username" id=""/>
                    Password: <input type="text" name="password"/>
                    <input type="submit" value="Create User"/>
                </form>

            </Layout>
        );
    }
}

module.exports = SignUp