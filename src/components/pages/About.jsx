const About = () => {
    return(
        <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 pt-4" style={{ minHeight: 400 }}>
        <div
          className="position-relative h-100 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <img
            className="position-absolute img-fluid w-100 h-100"
            src="img/about.jpg"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <div
            className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
            style={{ background: "rgba(0, 0, 0, .08)" }}
          >
            <h1 className="display-4 text-white mb-0">
              15 <span className="fs-4">Years</span>
            </h1>
            <h4 className="text-white">Experience</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <h6 className="text-primary text-uppercase">// About Us //</h6>
        <h1 className="mb-4">
          <span className="text-primary">NG Garage</span> Is The Best Place For
          Your Auto Care
        </h1>
        <p className="mb-4">
        Welcome to NG Garage, your ultimate destination for top-notch automotive care. At NG Garage, we pride ourselves on our passion for precision and dedication to excellence. With a team of skilled technicians and state-of-the-art equipment, we're committed to providing unparalleled service for your vehicle. Trust NG Garage for all your automotive needs and experience the difference firsthand.
        </p>
        <div className="row g-4 mb-3 pb-3">
          <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex">
              <div
                className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                style={{ width: 45, height: 45 }}
              >
                <span className="fw-bold text-secondary">01</span>
              </div>
              <div className="ps-3">
                <h6>Professional &amp; Expert</h6>
                <span>At NG Garage, our team embodies professionalism and expertise, ensuring your vehicle receives the highest quality care and attention it deserves.</span>
              </div>
            </div>
          </div>
          <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
            <div className="d-flex">
              <div
                className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                style={{ width: 45, height: 45 }}
              >
                <span className="fw-bold text-secondary">02</span>
              </div>
              <div className="ps-3">
                <h6>Quality Servicing Center</h6>
                <span>At NG Garage, we stand as a premier Quality Servicing Center, dedicated to delivering excellence in every aspect of vehicle maintenance and care.</span>
              </div>
            </div>
          </div>
          <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
            <div className="d-flex">
              <div
                className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                style={{ width: 45, height: 45 }}
              >
                <span className="fw-bold text-secondary">03</span>
              </div>
              <div className="ps-3">
                <h6>Awards Winning Workers</h6>
                <span>At NG Garage, our award-winning workers are dedicated professionals, committed to delivering exceptional service and exceeding expectations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default About;