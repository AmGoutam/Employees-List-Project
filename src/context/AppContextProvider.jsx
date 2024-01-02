import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyContext = createContext();

const getDataFromLS = () => {
  const data = localStorage.getItem("employe");
  if (data) {
    return JSON.parse(localStorage.getItem("employe"));
  } else {
    return [];
  }
};

const successMessage = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const warningMessage = (msg) => {
  toast.warn(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const AppContextProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    uniqueId: new Date().getTime().toString(),
    fname: "",
    mname: "",
    lname: "",
    phone: "",
    gender: "",
    modeofcontact: "",
    maritalstatus: "",
    immediatejoiner: "",
  });
  const [items, setItems] = useState(getDataFromLS());
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      return {
        ...inputData,
        [name]: value,
      };
    });
  };

  const addEmp = (e) => {
    e.preventDefault();
    // console.log("handelSubmit",inputData);

    if (
      [
        inputData.fname,
        inputData.mname,
        inputData.lname,
        inputData.phone,
        inputData.gender,
        inputData.modeofcontact,
        inputData.maritalstatus,
        inputData.immediatejoiner,
      ].some((curElm) => curElm.length == "")
    ) {
      warningMessage("Please Fill The Data");
    } else if (!toggleBtn) {
      setItems(
        items.map((curElm) => {
          if (curElm.uniqueId === isEdit) {
            return {
              ...curElm,
              fname: inputData.fname,
              mname: inputData.mname,
              lname: inputData.lname,
              phone: inputData.phone,
              gender: inputData.gender,
              modeofcontact: inputData.modeofcontact,
              maritalstatus: inputData.maritalstatus,
              immediatejoiner: inputData.immediatejoiner,
            };
          }
          return curElm;
        })
      );

      setToggleBtn(true);
      setInputData({
        fname: "",
        mname: "",
        lname: "",
        phone: "",
        gender: "",
        modeofcontact: "",
        maritalstatus: "",
        immediatejoiner: "",
      });
      setIsEdit(null);
      successMessage("Data Successfully Update");
    } else {
      console.log("items,", items);
      setItems([...items, inputData]);
      successMessage("Data Successfully Save");
      setInputData({
        fname: "",
        mname: "",
        lname: "",
        phone: "",
        gender: "",
        modeofcontact: "",
        maritalstatus: "",
        immediatejoiner: "",
      });
    }
  };

  const deleteEmp = (id) => {
    console.log("id", id);
    if (confirm("Are youn sure")) {
      const updatedItems = items.filter((curElm) => {
        return curElm.uniqueId !== id;
      });
      setItems(updatedItems);
      successMessage("Data Successfully Delete");
    }
  };

  const editData = (id) => {
    console.log(id);
    let newData = items.find((curElm) => {
      return curElm.uniqueId === id;
    });
    console.log("newData", newData);
    setToggleBtn(false);
    setInputData({
      fname: newData.fname,
      mname: newData.mname,
      lname: newData.lname,
      phone: newData.phone,
      gender: newData.gender,
      modeofcontact: newData.modeofcontact,
      maritalstatus: newData.maritalstatus,
      immediatejoiner: newData.immediatejoiner,
    });
    setIsEdit(id);
  };

  useEffect(() => {
    localStorage.setItem("employe", JSON.stringify(items));
  }, [addEmp]);

  const clearAll = () => {
    setInputData({
      fname: "",
      mname: "",
      lname: "",
      phone: "",
      gender: "",
      modeofcontact: "",
      maritalstatus: "",
      immediatejoiner: "",
    });
  };

  return (
    <MyContext.Provider
      value={{
        inputData,
        onChangeEvent,
        addEmp,
        items,
        deleteEmp,
        editData,
        toggleBtn,
        clearAll,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MyContext);
};

export { AppContextProvider, useGlobalContext };
