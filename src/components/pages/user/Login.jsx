import * as styles from "./Login.module.css";
const Login = () =>{
    return(
        <>
            <div
        className="container-fluid bg-secondary booking my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div
                className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Login</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Email"
                        style={{ height: 40 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Password"
                        style={{ height: 40 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary w-100 py-3" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>







            
        </>
    )
}

export default Login;