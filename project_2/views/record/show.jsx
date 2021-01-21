const React = require("react");
const Layout = require("../Layout");

class Show extends React.Component {
  render() {
    const { record, id } = this.props;
    return (
      <Layout title={record.albumTitle} userId={id}>
        <div className="d-flex justify-content-center">
          <div className="card" style={{ maxWidth: "20rem" }}>
            <h2 className="card-header bg-dark text-white">
              {record.albumTitle}
            </h2>
            <img
              src={record.albumArtwork}
              alt={record.albumTitle}
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                On {record.releaseDate}, {record.artist} dropped a great{" "}
                {record.genre} album. The world was never the same!
              </p>
              <div className="d-flex">
                <div className="btn-group">
                  <a
                    href={`/records/edit/${record._id}`}
                    type="button"
                    className="btn btn-sm btn-outline-dark"
                  >
                    Edit
                  </a>
                  <a
                    href={`/records/${record._id}?_method=DELETE`}
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
            {/* <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                                <button type="submit" id="delete" className="btn btn-primaty">Delete</button>
                              </form> */}
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
