import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";

const Contacts = () => {
  const {isAuthenticated} = useContext(AuthContext);
  const [isSend, setIsSend] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsSend(true);
  }
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-primary text-uppercase">// Contact Us //</h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4 justify-content-center">
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
          {isAuthenticated && (
            <div className="col-md-7">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <h3 className="mb-4 text-center">Contact us</h3>
              <form onSubmit={onSubmit}>
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
                      disabled={isSend}>
                      Send Message
                    </button>
                    <div className="col-12 col-sm-12">
                      {isSend && (
                        <p
                          style={{
                            margin: "2em auto",
                            textAlign: "center",
                          }}
                        >
                          Your message is sent! We will answer soon as possible!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
