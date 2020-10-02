const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <Layout>
                    <div className="show-records-container">
                        <img src={record.albumArtwork} alt="Album Artwork" className="show-records-image"/>
                        <div>
                            <h4>{record.artist}: </h4>
                            <h1>{record.albumTitle}</h1>
                            <h4>Genre: {record.genre}</h4>
                            <h4>Release: {record.releaseDate}</h4>
                        </div>
                        <aside>
                            <a href={`edit/${record._id}`}><button className="button">Edit</button></a>
                            <a href={`/reviews/${record._id}`}> <button className="button">Review</button></a>
                            <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                                <input type="submit" defaultValue="Delete" className="button"/>
                            </form>
                        </aside>
                    </div>
            </Layout>
        );
    }
}

module.exports = Show;