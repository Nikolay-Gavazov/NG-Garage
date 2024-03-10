import { useContext, useMemo, useState } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import Spinner from "../../shared/Spinner";
const Register = () => {
  const [errors, setErrors] = useState({});
  const { registerSubmitHandler, serverError, isLoading } =
    useContext(AuthContext);

  const initValue = useMemo(() => ({ email: "", password: "", rePass: "" }), []);

  const { formValue, onSubmit, onChange } = useForm(
    initValue,
    registerSubmitHandler
  );

  const emailValidator = () => {
    const emailRegex = /^[a-zA-Z\.-]{2,}[0-9]*@[a-z]+\.[a-z]{2,}$/gm;

    if (!emailRegex.test(formValue.email)) {
      setErrors((state) => ({
        ...state,
        email: "Email is not valid. Please enter a valid email address!",
      }));
    } else {
      if (errors.email) {
        setErrors((state) => ({ ...state, email: "" }));
      }
    }
  };

  const passwordValidator = () => {
    if (formValue.password.length < 6) {
      setErrors((state) => ({
        ...state,
        password: "Password must be at least 6 characters",
      }));
    } else {
      if (errors.password) {
        setErrors((state) => ({ ...state, password: "" }));
      }
    }
  };

  const repPassValidator = () => {
    if (formValue.password != formValue.rePass) {
      setErrors((state) => ({
        ...state,
        rePass: "Password does not match with the Repeated Password",
      }));
    } else {
      if (errors.rePass) {
        setErrors((state) => ({ ...state, rePass: "" }));
      }
    }
  };

  return (
    <>
      <div
        className="container-fluid bg-secondary booking my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          {isLoading && <Spinner />}
          <div>
            <div className="row gx-5">
              <div className="col-lg-6">
                <div
                  className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <h1 className="text-white mb-4">Register</h1>
                  <form onSubmit={onSubmit}>
                    <div className="row g-3 justify-content-center">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Email"
                          style={{ height: 40 }}
                          name="email"
                          value={formValue.email}
                          onChange={onChange}
                          onBlur={emailValidator}
                        />
                      </div>
                      <div className="col-12 col-sm-8">
                        {errors.email && (
                          <p style={{ color: "white" }}>{errors.email}</p>
                        )}
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="password"
                          className="form-control border-0"
                          placeholder="Password"
                          style={{ height: 40 }}
                          name="password"
                          value={formValue.password}
                          onChange={onChange}
                          onBlur={passwordValidator}
                        />
                      </div>
                      <div className="col-12 col-sm-8">
                        {errors.password && (
                          <p style={{ color: "white" }}>{errors.password}</p>
                        )}
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="password"
                          className="form-control border-0"
                          placeholder="Password"
                          style={{ height: 40 }}
                          name="rePass"
                          value={formValue.rePass}
                          onChange={onChange}
                          onBlur={repPassValidator}
                        />
                      </div>
                      <div className="col-12 col-sm-8">
                        {errors.rePass && (
                          <p style={{ color: "white" }}>{errors.rePass}</p>
                        )}
                      </div>
                      <div className="col-12 col-sm-6">
                        <button
                          className="btn btn-secondary w-100 py-3"
                          type="submit"
                        >
                          Register
                        </button>
                        <div className="col-12 col-sm-12">
                          {serverError && (
                            <p
                              style={{
                                color: "white",
                                margin: "2em auto",
                                textAlign: "center",
                              }}
                            >
                              {serverError}
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
      </div>
    </>
  );
};
export default Register;
