import { useEffect, useState } from "react";

const Fact = () => {
  const [experiance, setExperiance] = useState(0);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSatisfiedCustomers(prevCustomers => {
        const newCustomers = prevCustomers + 10;
        return newCustomers <= 2894 ? newCustomers : prevCustomers;
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
   const interval = setInterval(() => {
    setExperiance(state => {
      const experiance = state + 1;
      return experiance <= 16 ? experiance : state;
    });
   },100) 

   return () => clearInterval(interval);
  },[]); 

    return(
        <div className="container-fluid fact bg-dark my-5 py-5">
  <div className="container">
    <div className="row g-4">
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.1s"
      >
        <i className="fa fa-check fa-2x text-white mb-3" />
        <h2 className="text-white mb-2" data-toggle="counter-up">
          {experiance}
        </h2>
        <p className="text-white mb-0">Years Experience</p>
      </div>
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.5s"
      >
        <i className="fa fa-users fa-2x text-white mb-3" />
        <h2 className="text-white mb-2" data-toggle="counter-up">
          {satisfiedCustomers}
        </h2>
        <p className="text-white mb-0">Satisfied Clients</p>
      </div>
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.7s"
      >
        <i className="fa fa-car fa-2x text-white mb-3" />
        <h2 className="text-white mb-2" data-toggle="counter-up">
          {satisfiedCustomers}
        </h2>
        <p className="text-white mb-0">Compleate Projects</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Fact;