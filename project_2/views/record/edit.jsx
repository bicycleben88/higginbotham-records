const React = require("react");
const Layout = require("../Layout");

class Edit extends React.Component {
  render() {
    const { record } = this.props;
    return (
      <Layout title={record.albumTitle}>
        <div className="container">
          <form
            action={`/records/edit/${record._id}?_method=PUT`}
            method="POST"
          >
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
                  defaultValue={record.artist}
                />
              </div>
              <div className="mb-3 col">
                <label for="albumTitle" className="form-label">
                  Album Title
                </label>
                <input
                  type="text"
                  name="albumTitle"
                  id="albumTitle"
                  className="form-control"
                  defaultValue={record.albumTitle}
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
                  defaultValue={record.genre}
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
                  defaultValue={record.releaseDate}
                />
              </div>
            </div>
            <div className="mb-3 col">
              <label for="albumArtwork" className="form-label">
                Album Artwork
              </label>
              <input
                type="text"
                name="albumArtwork"
                id="albumArtwork"
                className="form-control"
                defaultValue={record.albumArtwork}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Album
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
