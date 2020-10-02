const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <Layout>
                    <h1>{record.artist}</h1>
                    <div className="show-records-container">
                        <img src={record.albumArtwork} alt="Album Artwork" className="show-records-image"/>
                        <ul>
                            <li>{record.albumTitle}</li>
                            <li>{record.genre}</li>
                            <li>{record.releaseDate}</li>
                        </ul>
                        <aside>
                            <a href={`edit/${record._id}`}><button>Edit Album</button></a>
                            <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                                <input type="submit" defaultValue="Delete Record"/>
                            </form>
                            <a href={`/reviews/${record._id}`}> <button>  Reviews</button></a>
                        </aside>
                    </div>
            </Layout>
        );
    }
}

module.exports = Show;