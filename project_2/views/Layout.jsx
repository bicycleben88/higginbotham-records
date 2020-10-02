const React = require('react');
const index = require('../controllers/auth/index');
class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                <script src={`${index}`} defer></script>
                <link rel="stylesheet" href="/styles.css"/>
                <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <div className="header-wrapper">
                            <ul className="nav-container">
                                <li className="nav-logo">
                                    <h1>Higginbotham Records</h1>
                                </li>
                                <li className="nav-links">
                                    <a href="/auth/signup">Sign Up</a>
                                </li>
                                <li className="nav-links">
                                    <a href="/auth/login">Log In</a>
                                </li>
                                <li className="nav-links">
                                    <a href="/records">Home</a>
                                </li>
                                <li className="nav-social">
                                    <a href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"><img src="/images/linkedin_icon.png" alt="linked in icon"/></a>
                                    <a href="https://github.com/bicycleben88"><img src="/images/git_icon.png" alt="git hub icon"/></a>
                                </li>
                            </ul>
                        </div>
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