const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <Layout>
                    <img src={record.albumArtwork} alt="Album Artwork"/>
                    <p>{record.albumTitle}</p>
                    <p>{record.artist}</p>
                    <a href={`edit/${record._id}`}><button>Edit Album</button></a>
                    <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                        <input type="submit" defaultValue="Delete Record"/>
                    </form>
                    <a href={`/reviews/${record._id}`}>Reviews</a>
            </Layout>
        );
    }
}

module.exports = Show;