const React = require('react');
const Layout = require('../Layout');

class Edit extends React.Component {
    render() {
        const { review, id } = this.props
        return (
            <Layout title="Edit Review">
                <div className="edit-review-container">
                    <form action={`/reviews/edit/${review._id}?_method=PUT`} method="POST" className="edit-review-form">
                        <input type="text" name="userId" defaultValue={review.userId} style={{display: 'none'}}/>
                        <input type="text" name="title" defaultValue={review.title}/>
                        <input type="formfield" name="body" defaultValue={review.body}/>
                        <input type="submit" defaultValue="Edit Review" className="button"/>
                    </form>
                    {/* <form action={`/reviews/${review._id}?_method=DELETE`} method="POST">
                        <input type="submit" defaultValue="Delete" className="button"/>
                    </form> */}
                </div>
            </Layout>
        );
    }
}

module.exports = Edit;