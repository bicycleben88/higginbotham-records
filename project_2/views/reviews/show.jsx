const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { reviews, id } = this.props
        return (
            <Layout>
                <h1>Reviews:</h1>
                {
                    reviews.map((review) => {
                        return <div className="show-review-container">
                                    <div>
                                        <h3>Title: {review.title}</h3>
                                        <p>Review: {review.body}</p>
                                    </div>
                                    <aside>
                                        <form action={`/reviews/${review._id}?_method=DELETE`} method="POST">
                                            <input type="submit" defaultValue="Delete Review"/>
                                        </form>
                                        <a href={`/reviews/edit/${review._id}`}><button> Edit Review</button></a>
                                    </aside>
                                </div>
                            })
                }
              <a href={`/reviews/new/${id}`}><button>Add Review</button></a>
            </Layout>
        );
    }
}

module.exports = Show;