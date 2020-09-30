const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { reviews, id } = this.props
        return (
            <Layout>
              {
                  reviews.map((review) => {
                      return <div>
                                <p>{review.title}</p>
                                <form action={`/reviews/${review._id}?_method=DELETE`} method="POST">
                                    <input type="submit" defaultValue="Delete Review"/>
                                </form>
                                <a href={`/reviews/edit/${review._id}`}>Edit Review</a>
                            </div>
                  })
              }
              <a href={`/reviews/new/${id}`}>Add Review</a>
            </Layout>
        );
    }
}

module.exports = Show;