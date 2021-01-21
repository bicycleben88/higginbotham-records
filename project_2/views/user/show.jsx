const React = require("react");
const Layout = require("../Layout");

class Show extends React.Component {
  render() {
    const { user, id } = this.props;
    return (
      <Layout title={user.name} userId={id}>
        <div className="d-flex justify-content-center">
          <div className="card" style={{ maxWidth: "20rem" }}>
            <h2 className="card-header bg-dark text-white">{user.name}</h2>
            <img src={user.image} alt={user.name} className="card-img-top" />
            <div className="card-body">
              <p className="card-text">
                My favorite album is {user.favoriteAlbum}
              </p>
              <div className="btn-group">
                <a href={`edit/${user._id}`} className="btn btn-outline-dark">
                  Edit
                </a>
                <a
                  href={`/user/${user._id}?_method=DELETE`}
                  className="btn btn-outline-danger"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
