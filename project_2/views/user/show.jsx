const React = require("react");
const Layout = require("../Layout");

class Show extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Layout title={user.name}>
        <div className="col">
          <div className="card">
            <img src={user.image} alt={user.name} className="card-img-top" />
            <div className="card-body">
              <h2>Welcome {user.name}!</h2>
              <h4>Favorite Album: {user.favoriteAlbum}</h4>
            </div>
            <a href="/records/new" className="btn btn-primary">
              Add Album
            </a>
            <a href="/auth/logout" className="btn btn-primary">
              Log Out
            </a>
            <a href={`edit/${user._id}`} className="btn btn-primary">
              Update User
            </a>
            <a
              href={`/user/${user._id}?_method=DELETE`}
              className="btn btn-primary"
            >
              Delete User
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
