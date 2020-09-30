const React = require('react');

class Record extends React.Component {
    render() {
        const { records } = this.props;
        return (
            <div>
                {
                    records.map((record) => {
                        return <div className="album-artwork-container">
                            <a href={`/records/${record._id}`}><img src={record.albumArtwork} alt="Album Cover" className="album-artwork" /></a>
                        </div>
                    })
                }
                <a href="/auth/login"><button>Log In</button></a>
                <a href="/auth/signup"><button>Sign Up</button></a>
            </div>
        );
    }
}

module.exports = Record;