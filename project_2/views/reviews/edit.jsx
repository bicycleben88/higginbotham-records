const React = require('react');
const Layout = require('../Layout');

class Edit extends React.Component {
    render() {
        const { review, id } = this.props
        return (
            <Layout>
              <form action={`/reviews/edit/${review._id}?_method=PUT`} method="POST">
                  <input type="text" name="title" defaultValue={review.title}/>
                  <input type="formfield" name="body" defaultValue={review.body}/>
                  <input type="submit" defaultValue="Add Review"/>
              </form>
            </Layout>
        );
    }
}

module.exports = Edit;