const React = require('react');

class Show extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <div>
                    <img src={record.albumArtwork} alt="Album Artwork"/>
                    <p>{record.albumTitle}</p>
                    <p>{record.artist}</p>
                    <a href={`edit/${record._id}`}><button>Edit Album</button></a>
                    <form action={`/records/${record._id}?_method=DELETE`} method="POST">
                        <input type="submit" defaultValue="Delete Record"/>
                    </form>
                    <a href={`/reviews/${record._id}`}>Reviews</a>
            </div>
        );
    }
}

module.exports = Show;