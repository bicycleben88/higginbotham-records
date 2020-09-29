const React = require('react');

class Record extends React.Component {
    render() {
        return (
            <div>
                <a href="/auth/login"><button>Log In</button></a>
                <a href="/auth/signup"><button>Sign Up</button></a>
            </div>
        );
    }
}

module.exports = Record;