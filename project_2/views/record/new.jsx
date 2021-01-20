const React = require("react");
const Layout = require("../Layout");

class New extends React.Component {
  render() {
    return (
      <Layout title="Add New Album">
        <div className="container">
          <form action={`/records/new`} method="POST">
            <div className="row">
              <div className="mb-3 col">
                <label for="artist" className="form-label">
                  Artist
                </label>
                <input
                  type="text"
                  name="artist"
                  id="artist"
                  className="form-control"
                />
              </div>
              <div className="mb-3 col">
                <label for="albumTitle" className="form-label">
                  ALbum Title
                </label>
                <input
                  type="text"
                  name="albumTitle"
                  id="albumTitle"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col">
                <label for="genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="form-control"
                />
              </div>
              <div className="mb-3 col">
                <label for="releaseDate" className="form-label">
                  Release Date
                </label>
                <input
                  type="text"
                  name="releaseDate"
                  id="releaseDate"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 col">
              <label for="albumArtwork" className="form-label">
                Album Artwork URL
              </label>
              <input
                type="text"
                name="albumArtwork"
                id="albumArtwork"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Album
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = New;
