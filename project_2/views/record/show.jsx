const React = require('react');

class Show extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <div>
                    <img src={record.albumArtwork} alt="Album Artwork"/>
                    <p>{record.albumTitle}</p>
                    <p>{record.artist}</p>
            </div>
        );
    }
}

module.exports = Show;