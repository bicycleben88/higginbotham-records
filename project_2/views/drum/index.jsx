const React = require("react");
const Layout = require("../Layout");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Drum Kit" key="drum kit">
        <div className="letters row">
          <div data-key="65" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>A</kbd>
              <span>Boom</span>
            </div>
          </div>
          <div data-key="83" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>S</kbd>
              <span>Snare</span>
            </div>
          </div>
          <div data-key="68" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>D</kbd>
              <span>Clap</span>
            </div>
          </div>
          <div data-key="70" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>F</kbd>
              <span>Hi Hat</span>
            </div>
          </div>
          <div data-key="74" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>J</kbd>
              <span>Open Hat</span>
            </div>
          </div>
          <div data-key="75" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>K</kbd>
              <span>Kick</span>
            </div>
          </div>
          <div data-key="76" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>L</kbd>
              <span>Ride</span>
            </div>
          </div>
          <div data-key="186" className="letter col card">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <kbd>;</kbd>
              <span>Tom</span>
            </div>
          </div>
        </div>
        <audio src="boom.wav" data-key="65" />
        <audio src="snare.wav" data-key="83" />
        <audio src="clap.wav" data-key="68" />
        <audio src="hihat.wav" data-key="70" />
        <audio src="openhat.wav" data-key="74" />
        <audio src="kick.wav" data-key="75" />
        <audio src="ride.wav" data-key="76" />
        <audio src="tom.wav" data-key="186" />
      </Layout>
    );
  }
}

module.exports = Index;
