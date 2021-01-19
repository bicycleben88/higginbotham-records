const React = require("react");
const index = require("../controllers/auth/index");
class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <script src={`${index}`} defer />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/styles.css" />
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
                  <a href="https://www.linkedin.com/in/benjamin-alt-higginbotham/">
                    <img src="/images/linkedin_icon.png" alt="linked in icon" />
                  </a>
                  <a href="https://github.com/bicycleben88">
                    <img src="/images/git_icon.png" alt="git hub icon" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <a href="/auth/logout">Log Out</a>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
