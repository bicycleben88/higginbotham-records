const React = require("react");
const Layout = require("../Layout");

class LogIn extends React.Component {
  render() {
    return (
      <Layout title="Log In">
        <form action="/auth/login" method="post" className="log-in-form">
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <button type="submit" value="login" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}

module.exports = LogIn;
