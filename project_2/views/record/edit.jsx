const React = require('react');
const Layout = require('../Layout');

class Edit extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <Layout>
                <div className="edit-album-container">
                    <form action={`/records/edit/${record._id}?_method=PUT`} method="POST" className="edit-album-form">
                        <input type="text" name="artist" defaultValue={record.artist}/>
                        <input type="text" name="albumTitle" defaultValue={record.albumTitle}/>
                        <input type="text" name="genre" defaultValue={record.genre}/>
                        <input type="text" name="releaseDate" defaultValue={record.releaseDate}/>
                        <input type="text" name="albumArtwork" defaultValue={record.albumArtwork}/>
                        <input type="submit" defaultValue="Edit Album"/>
                    </form> 
                </div>
            </Layout>
        );
    }
}

module.exports = Edit;