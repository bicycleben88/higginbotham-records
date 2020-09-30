const React = require('react');

class Show extends React.Component {
    render() {
        const { reviews, id } = this.props
        return (
            <div>
              {
                  reviews.map((review) => {
                    return <p>{review.title}</p>
                  })
              }
              <a href={`/reviews/new/${id}`}>Add Review</a>
            </div>
        );
    }
}

module.exports = Show;