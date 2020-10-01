const React = require('react');
const Layout = require('../Layout');

class Index extends React.Component {
    render() {
        const { records } = this.props;
        return (
            <Layout>
                <div className="index-records-container">
                {
                    records.map((record) => {
                        return <div className="index-records-images">
                            <a href={`/records/${record._id}`}><img src={record.albumArtwork} alt="Album Cover" className="album-artwork" /></a>
                        </div>
                    })
                }
                </div>
            </Layout>
        );
    }
}

module.exports = Index;