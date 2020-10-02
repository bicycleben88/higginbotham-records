const React = require('react');
const Layout = require('../Layout');

class LogIn extends React.Component {
    render() {
        return (
            <Layout title="Log In">
                <div className="log-in-container">
                    <form action="/auth/login" method="post" className="log-in-form">
                        <input type="text" name="username" placeholder="username"/>
                        <input type="text" name="password" placeholder="password"/>
                        <input type="submit" value="login" className="button"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = LogIn