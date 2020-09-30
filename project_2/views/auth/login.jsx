const React = require('react');

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form action="/auth/login" method="post">
                    <input type="text" name="username" placeholder="username"/>
                    <input type="text" name="password" placeholder="password"/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}

module.exports = LogIn