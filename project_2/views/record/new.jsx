const React = require('react');

class New extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <div>
                <form action={`/records/new`} method="POST">
                    <input type="text" name="artist" placeholder="Artist"/>
                    <input type="text" name="albumTitle" placeholder="Album Title"/>
                    <input type="text" name="genre" placeholder="Genre"/>
                    <input type="text" name="releaseDate" placeholder="Release Date"/>
                    <input type="text" name="albumArtwork" placeholder="Album Artwork URL"/>
                    <input type="submit" defaultValue="Add Album"/>
                </form> 
            </div>
        );
    }
}

module.exports = New;