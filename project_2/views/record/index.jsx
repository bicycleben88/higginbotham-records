const React = require('react');
const Layout = require('../Layout');

class Index extends React.Component {
    render() {
        const { records } = this.props;
        return (
            <Layout>
                {
                    records.map((record) => {
                        return <div className="album-artwork-container">
                            <a href={`/records/${record._id}`}><img src={record.albumArtwork} alt="Album Cover" className="album-artwork" /></a>
                        </div>
                    })
                }
                <a href="/auth/login"><button>Log In</button></a>
                <a href="/auth/signup"><button>Sign Up</button></a>
            </Layout>
        );
    }
}

module.exports = Index;