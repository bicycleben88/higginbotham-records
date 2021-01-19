const React = require("react");
const Layout = require("../Layout");

class SignUp extends React.Component {
  render() {
    return (
      <Layout title="Sign Up">
        <form action="/auth/signup" method="POST">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" id="name" />
          </div>
          <div className="mb-3">
            <label for="favoriteAlbum" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="favoriteAlbum"
              id="favoriteAlbum"
            />
          </div>
          <div className="mb-3">
            <label for="image" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              id="image"
            />
          </div>
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
              id="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Profile
          </button>
        </form>
      </Layout>
    );
  }
}

module.exports = SignUp;
