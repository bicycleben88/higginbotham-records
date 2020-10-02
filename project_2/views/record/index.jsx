const React = require('react');
const Layout = require('../Layout');

class Index extends React.Component {
    render() {
        const randomIndex = Math.floor(Math.random() * this.props.records.length);
        const { records } = this.props;
        return (
            <Layout title="Higginbotham Records">
                <div className="index-records-container">
                    <div className="index-small-records-container">
                    {
                        records.map((record) => {
                            return <div className="index-records-small-images">
                                <a href={`/records/${record._id}`}><img src={record.albumArtwork} alt="Album Cover" className="album-artwork" /></a>
                            </div>
                        })
                    }
                    </div>
                    <div className="index-large-records-container">
                    {
                        records.map((record) => {
                            let recordIndex = records.indexOf(record);
                            if ( ( recordIndex < (randomIndex + 3) ) && ( recordIndex >= randomIndex )) {
                            return <div className="index-records-large-images">
                                <a href={`/records/${record._id}`}><img src={record.albumArtwork} alt="Album Cover" className="album-artwork" /></a>
                            </div>
                            }
                        })
                    }
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Index;