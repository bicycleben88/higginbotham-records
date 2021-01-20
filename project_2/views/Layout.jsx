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
            <h1>Higginbotham Records</h1>
            <nav className="navbar justify-content-center">
              <a href="/auth/signup" className="nav-link">
                Sign Up
              </a>
              <a href="/auth/login" className="nav-link">
                Log In
              </a>
              <a href="/records" className="nav-link">
                Home
              </a>
              <a href="/auth/logout" className="nav-link">
                Log Out
              </a>
            </nav>
          </header>
          <main>{this.props.children}</main>
          <footer></footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
