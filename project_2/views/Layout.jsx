const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>

                </head>
                <body>
                    <header title={this.props.title}>
                        <h1>Higginbotham Records</h1>
                        <a href="/auth/signup">Sign Up</a>
                        <a href="/auth/login">Log In</a>
                        <a href="/records">Home</a>
                    </header>
                    <main>{this.props.children}</main>
                    <footer>
                        
                    </footer>
                </body>
            </html>
        );
    }
}

module.exports = Layout