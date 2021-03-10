const React = require("react");
const Layout = require("../Layout");

class Index extends React.Component {
  render() {
    const { records, id } = this.props;
    return (
      <Layout title="Higginbotham Records" userId={id}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {records.map((record) => {
            return (
              <div className="col d-flex align-items-stretch" id={record.id}>
                <div className="card shadow-sm" id="index-card">
                  <a href={`/records/${record._id}`}>
                    <img
                      src={record.albumArtwork}
                      alt={record.albumTitle}
                      className="card-img-top img-thumbnail"
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text">
                      <strong>{record.albumTitle}</strong> is an album by{" "}
                      <strong>{record.artist}</strong>
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className="btn-group m-2">
                      <a
                        href={`/records/${record._id}`}
                        type="button"
                        className="btn btn-sm btn-outline-dark"
                      >
                        View
                      </a>
                      <a
                        href={`/records/edit/${record._id}`}
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
