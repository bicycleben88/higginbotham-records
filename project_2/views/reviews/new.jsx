const React = require('react');
const Layout = require('../Layout');

class New extends React.Component {
    render() {
        const { review, id } = this.props
        return (
            <Layout>
              <form action={`/reviews/new/${id}`} method="POST">
                  <input type="text" name="title" placeholder="Title"/>
                  <input type="formfield" name="body" placeholder="Review"/>
                  <input type="submit" defaultValue="Add Review"/>
              </form>
            </Layout>
        );
    }
}

module.exports = New;