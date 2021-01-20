const React = require("react");
const Layout = require("../Layout");

class Index extends React.Component {
  render() {
    const { records } = this.props;
    return (
      <Layout title="Higginbotham Records">
        <div className="container">
          {records.map((record) => {
            return (
              <div className="card" id="index-card">
                <a href={`/records/${record._id}`}>
                  <img
                    src={record.albumArtwork}
                    alt={record.albumTitle}
                    className="img-thumbnail"
                  />
                </a>
                <div className="card-body">
                  <h3>{record.albumTitle}</h3>
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
