import { useState } from "react";
const Booking = () => {
  const [isSend, setIsSend] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsSend(true);
  }

  return (
    <div
      className="container-fluid bg-secondary booking my-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 py-5">
            <div className="py-5">
              <h1 className="text-white mb-4">
                Certified and Award Winning Car Repair Service Provider
              </h1>
              <p className="text-white mb-0">
                At NG Garage, we take pride in being a certified and
                award-winning car repair service provider, dedicated to
                delivering top-notch automotive solutions with excellence and
                professionalism. Our commitment to quality and our track record
                of accolades underscore our unwavering dedication to customer
                satisfaction and unparalleled service standards.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <h1 className="text-white mb-4">Book For A Service</h1>
              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      name="name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      name="email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      name="option"
                      className="form-select border-0"
                      style={{ height: 55 }}
                    >
                      <option selected="">Select A Service</option>
                      <option value={1}>Service 1</option>
                      <option value={2}>Service 2</option>
                      <option value={3}>Service 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Service Date"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                        name="date"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Request"
                      defaultValue={""}
                      name="request"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      disabled={isSend}
                      className="btn btn-secondary w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                    <div className="col-12 col-sm-12">
                      {isSend && (
                        <p
                          style={{
                            color: "white",
                            margin: "2em auto",
                            textAlign: "center",
                          }}
                        >
                          Your booking request is sent!
                        </p>
                      )}
                    </div>
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
export default Booking;
