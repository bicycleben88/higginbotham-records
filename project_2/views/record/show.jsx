const React = require("react");
const Layout = require("../Layout");

class Show extends React.Component {
  render() {
    const { record } = this.props;
    return (
      <Layout title={record.albumTitle}>
        <div className="card">
          <img
            src={record.albumArtwork}
            alt="Album Artwork"
            className="card-img-top"
          />
          <div className="card-body">
            <h4>{record.artist}: </h4>
            <h1>{record.albumTitle}</h1>
            <h4>Genre: {record.genre}</h4>
            <h4>Release: {record.releaseDate}</h4>
          </div>

          <a href={`edit/${record._id}`} className="btn btn-primary">
            Edit
          </a>
          <a href={`/reviews/${record._id}`} className="btn btn-primary">
            Review
          </a>
          <a
            href={`/records/${record._id}?_method=DELETE`}
            className="btn btn-primary"
          >
            Delete
          </a>
          {/* <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                                <button type="submit" id="delete" className="btn btn-primaty">Delete</button>
                            </form> */}
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
