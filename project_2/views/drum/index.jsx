const React = require("react");
const Layout = require("../Layout");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Drum Kit" key="drum kit">
        <h3 className="d-xs-block d-sm-none text-center">
          Drums can only be played on Laptops or Desktops :(
        </h3>
        <div className="letters row d-none d-sm-flex">
          <div data-key="83" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Snare</p>
              <kbd>S</kbd>
            </div>
          </div>
          <div data-key="68" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Clap</p>
              <kbd>D</kbd>
            </div>
          </div>
          <div data-key="70" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Hi Hat</p>
              <kbd>F</kbd>
            </div>
          </div>
          {/* split the row in two when screen size decreases */}
          <div class="w-100 d-md-none d-sm-block"></div>
          {/* ----------------------------------------------- */}
          <div data-key="74" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Tom</p>
              <kbd>J</kbd>
            </div>
          </div>
          <div data-key="75" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Kick</p>
              <kbd>K</kbd>
            </div>
          </div>
          <div data-key="76" className="letter col card text-center m-1">
            <img src="drum.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title">Ride</p>
              <kbd>L</kbd>
            </div>
          </div>
        </div>
        <audio src="snare.wav" data-key="83" />
        <audio src="clap.wav" data-key="68" />
        <audio src="hihat.wav" data-key="70" />
        <audio src="tom.wav" data-key="74" />
        <audio src="kick.wav" data-key="75" />
        <audio src="ride.wav" data-key="76" />
      </Layout>
    );
  }
}

module.exports = Index;
