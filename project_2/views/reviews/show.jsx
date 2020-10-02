const React = require('react');
const Layout = require('../Layout');

class Show extends React.Component {
    render() {
        const { reviews, id } = this.props
        return (
            <Layout>
                <div className="show-review-container">
                    <aside>
                        <a href={`/reviews/new/${id}`}><button className="button">Add</button></a>
                    </aside>
                    <div className="review-text-container">
                    {
                        reviews.map((review) => {
                            return <div className="review-text">
                                        <h3>Title: {review.title}</h3>
                                        <p>Review: {review.body}</p>
                                        <div className="review-buttons buttons">
                                            {/* <form action={`/reviews/${review._id}?_method=DELETE`} method="POST">
                                                <input type="submit" defaultValue="Delete" className="button"/>
                                            </form> */}
                                            <a href={`/reviews/edit/${review._id}`}><button className="button"> Edit</button></a>
                                        </div>
                                    </div>
                                })
                    }
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Show;