const React = require('react');
const Layout = require('../Layout');

class LogIn extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Login Page</h1>
                <div className="log-in-container">
                    <form action="/auth/login" method="post" className="log-in-form">
                        <input type="text" name="username" placeholder="username"/>
                        <input type="text" name="password" placeholder="password"/>
                        <input type="submit" value="login"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = LogIn