import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useGlobalContext } from "../context/AppContextProvider";
const TableComp = () => {
  const { items, deleteEmp, editData } = useGlobalContext();

  return (
    <>
      <section className="container table-responsive">
        <table className="table table-bordered border-primary text-center table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Gender </th>
              <th>Phone Number</th>
              <th>Mode of contact</th>
              <th>Marital status</th>
              <th>Immediate joiner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items == "" ? (
              <tr>
                <td colSpan={10} className="fw-bold">
                  No Data Found
                </td>
              </tr>
            ) : (
              items.map((cuElm, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{cuElm.fname}</td>
                    <td>{cuElm.mname}</td>
                    <td>{cuElm.lname}</td>
                    <td>{cuElm.gender}</td>
                    <td>{cuElm.phone}</td>
                    <td>{cuElm.modeofcontact}</td>
                    <td>{cuElm.maritalstatus}</td>
                    <td>{cuElm.immediatejoiner}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary me-1"
                        onClick={() => editData(cuElm.uniqueId)}
                      >
                        <FiEdit />
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEmp(cuElm.uniqueId)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TableComp;
