const Contacts = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-primary text-uppercase">// Contact Us //</h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="bg-light d-flex flex-column justify-content-center p-4">
                  <h5 className="text-uppercase">// Booking //</h5>
                  <p className="m-0">
                    <i className="fa fa-envelope-open text-primary me-2" />
                    book@example.com
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light d-flex flex-column justify-content-center p-4">
                  <h5 className="text-uppercase">// General //</h5>
                  <p className="m-0">
                    <i className="fa fa-envelope-open text-primary me-2" />
                    info@example.com
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-light d-flex flex-column justify-content-center p-4">
                  <h5 className="text-uppercase">// Technical //</h5>
                  <p className="m-0">
                    <i className="fa fa-envelope-open text-primary me-2" />
                    tech@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.1615352787768!2d23.377164180096038!3d42.63940002112274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86c084796deb%3A0x11ee401206e440ee!2zZy5rLiBNbGFkb3N0IDNNbGFkb3N0LCDQti7Qui4g0JzQu9Cw0LTQvtGB0YIgMyAzMjksIDE3MTIgU29maWE!5e0!3m2!1sen!2sbg!4v1708505094888!5m2!1sen!2sbg"
              style={{ minHeight: 350, border: 0 }}
              className="position-relative rounded w-100 h-100"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <h3 style={{textAlign: "center", marginBottom: "1em"}}>Contact our support team now!</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
