const React = require('react');
const Layout = require('../Layout');

class New extends React.Component {
    render() {
        const { userId, albumId } = this.props
        return (
            <Layout>
                <div className="new-review-container">
                    <form action={`/reviews/new/${albumId}`} method="POST" className="new-review-form">
                        <input type="text" name="userId" defaultValue={userId} style={{display: 'none'}}/>
                        <input type="text" name="title" placeholder="Title"/>
                        <input type="formfield" name="body" placeholder="Review"/>
                        <input type="submit" defaultValue="Add Review" className="button"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = New;