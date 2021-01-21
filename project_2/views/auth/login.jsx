const React = require("react");
const Layout = require("../Layout");

class LogIn extends React.Component {
  render() {
    return (
      <Layout title="Log In">
        <div className="col">
          <form action="/auth/login" method="post" className="log-in-form">
            <div className="row">
              <div className="mb-3 col">
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
              <div className="mb-3 col">
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
            </div>
            <button type="submit" value="login" className="btn btn-danger">
              Log In
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = LogIn;
