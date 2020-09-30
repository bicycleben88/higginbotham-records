const React = require('react');
const Layout = require('../Layout');

class LogIn extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Login Page</h1>
                <form action="/auth/login" method="post">
                    <input type="text" name="username" placeholder="username"/>
                    <input type="text" name="password" placeholder="password"/>
                    <input type="submit" value="login"/>
                </form>
            </Layout>
        );
    }
}

module.exports = LogIn