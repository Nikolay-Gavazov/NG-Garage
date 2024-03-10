import { PulseLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
      <PulseLoader color="#3498db" loading={true} size={50} margin={"2px"} />
    </div>
    )
}

export default Spinner;