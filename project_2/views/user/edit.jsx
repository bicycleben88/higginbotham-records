const React = require("react");
const Layout = require("../Layout");

class Edit extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Layout>
        <div className="container">
          <form action={`/user/edit/${user._id}?_method=PUT`} method="POST">
            <div className="mb-3 col">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3 col">
              <label for="favoriteAlbum" className="form-label">
                Favorite Album
              </label>
              <input
                type="text"
                defaultValue={user.favoriteAlbum}
                name="favoriteAlbum"
                id="favoriteAlbum"
                className="form-control"
              />
            </div>
            <div className="mb-3 col">
              <label for="image" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                defaultValue={user.image}
                name="image"
                id="image"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
