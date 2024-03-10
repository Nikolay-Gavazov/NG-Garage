const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 footer-div">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Mladost 3, Sofia, Bulgaria
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +359 888 888 888
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" target="blank" href="https://twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" target="blank" href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" target="blank" href="https://youtube.com/">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" target="blank" href="https://linkedin.com/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-div">
            <h4 className="text-light mb-4">Opening Hours</h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">09.00 - 18.00</p>
            <h6 className="text-light">Saturday - Sunday:</h6>
            <p className="mb-0">Closed</p>
          </div>
          <div className="col-lg-3 col-md-6 footer-div">
            <h4 className="text-light mb-4">Services</h4>
            <a className="btn btn-link" href="/booking">
              Diagnostic Test
            </a>
            <a className="btn btn-link" href="/booking">
              Engine Servicing
            </a>
            <a className="btn btn-link" href="/booking">
              Tires Replacement
            </a>
            <a className="btn btn-link" href="/booking">
              Oil Changing
            </a>
            <a className="btn btn-link" href="/booking">
              Car Washing
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © Nikolay Gavazov 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer