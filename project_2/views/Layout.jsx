const React = require("react");
const index = require("../controllers/auth/index");
class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <script src={`${index}`} defer />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/styles.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <header>
            <div className="collapse bg-dark" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-m-7 py-4">
                    <h4 className="text-white">About</h4>
                    <p className="text-muted">
                      This is a FullStack Application using the MongoDB,
                      Express, React, Node (MERN) stack. It's full CRUD using
                      RESTful routes.
                    </p>
                  </div>
                  <div className="col-sm-4 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
                          target="#"
                          className="text-white"
                        >
                          /in
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://my-portfolio.benjamin-higginbotham.vercel.app/"
                          target="#"
                          className="text-white"
                        >
                          Folio
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/bicycleben88"
                          target="#"
                          className="text-white"
                        >
                          Git
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar navbar-dark bg-danger shadow-sm">
              <div className="container">
                <a
                  href="/records"
                  className="navbar-brand d-flex align-items-center"
                >
                  <img
                    width="20"
                    height="20"
                    className="me-2"
                    src="/record-icon.png"
                  />
                  <strong>Records</strong>
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle Navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </header>
          <main>
            <section className="container text-center py-5">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Higginbotham Records</h1>
                  <p className="lead text-muted">
                    When You're on the Run with Your Records in Tow. To Create,
                    Read, Update, or Delete Sign Up Below
                  </p>
                  <p>
                    <a
                      href="/auth/signup"
                      className="btn btn-outline-dark my-2"
                    >
                      Sign Up
                    </a>{" "}
                    <a href="/auth/login" className="btn btn-outline-dark my-2">
                      Login
                    </a>{" "}
                    <a
                      href="/records/new"
                      className="btn btn-outline-danger my-2"
                    >
                      Create a New Album
                    </a>
                  </p>
                </div>
              </div>
            </section>
            <article className="album py-5 bg-light">
              <div className="container">{this.props.children}</div>
            </article>
          </main>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
