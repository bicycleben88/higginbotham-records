const React = require('react');

class Show extends React.Component {
    render() {
        const { reviews, id } = this.props
        return (
            <div>
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
            </div>
        );
    }
}

module.exports = Show;