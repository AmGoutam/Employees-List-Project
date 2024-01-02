import { useGlobalContext } from "../context/AppContextProvider";
import { FaPlus } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormComp = () => {
  const { inputData, onChangeEvent, addEmp, toggleBtn, clearAll } =
    useGlobalContext();

  return (
    <>
      <section className="container formDiv">
        <form method="post" onSubmit={addEmp}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label fw-bold">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="fname"
              name="fname"
              value={inputData.fname}
              onChange={onChangeEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mname" className="form-label fw-bold">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Middle Name"
              id="mname"
              name="mname"
              value={inputData.mname}
              onChange={onChangeEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Fname" className="form-label fw-bold">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="lname"
              name="lname"
              value={inputData.lname}
              onChange={onChangeEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
              value={inputData.phone}
              onChange={onChangeEvent}
            />
          </div>
          <div className="mb-3">
            <label className="form-check-label me-3 fw-bold">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={onChangeEvent}
                checked={inputData.gender == "male" ? true : false}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={onChangeEvent}
                checked={inputData.gender == "female" ? true : false}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="others"
                value="others"
                onChange={onChangeEvent}
                checked={inputData.gender == "others" ? true : false}
              />
              <label className="form-check-label" htmlFor="others">
                Others
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-check-label me-3 fw-bold">
              Mode of Contact
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="mocemail"
                name="modeofcontact"
                value="email"
                onChange={onChangeEvent}
                checked={inputData.modeofcontact == "email" ? true : false}
              />
              <label className="form-check-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="mocphone"
                name="modeofcontact"
                value="phone"
                onChange={onChangeEvent}
                checked={inputData.modeofcontact == "phone" ? true : false}
              />
              <label className="form-check-label" htmlFor="phone">
                Phone
              </label>
            </div>
          </div>
          <div className="mb-2">
            <label className="form-check-label me-3 fw-bold">
              Marital status
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="maritalstatus"
              onChange={onChangeEvent}
            >
              <option
                defaultValue
                disabled={true}
                selected
              >
                Please Select One
              </option>
              <option
                value="married"
                selected={inputData.maritalstatus == "married" ? true : false}
              >
                married
              </option>
              <option
                value="single"
                selected={inputData.maritalstatus == "single" ? true : false}
              >
                single
              </option>
              <option
                value="divorced"
                selected={inputData.maritalstatus == "divorced" ? true : false}
              >
                divorced
              </option>
              <option
                value="widowed"
                selected={inputData.maritalstatus == "widowed" ? true : false}
              >
                widowed
              </option>
            </select>
          </div>
          <div>
            <label className="form-check-label me-3 fw-bold">
              Immediate joiner
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="immediatejoiner"
                id="yes"
                value="yes"
                onChange={onChangeEvent}
                checked={inputData.immediatejoiner == "yes" ? true : false}
              />
              <label className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="immediatejoiner"
                id="no"
                value="no"
                onChange={onChangeEvent}
                checked={inputData.immediatejoiner == "no" ? true : false}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            {toggleBtn ? (
              <button className="btn btn-primary" type="submit">
                Submit <FaPlus />
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Update <MdDataSaverOn />
              </button>
            )}

            <button className="btn btn-primary" type="reset" onClick={clearAll}>
              Clear
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default FormComp;
