import React from "react";
import { Input2 } from "./FormElements/Input";
import Select from "./FormElements/Select";

const Form = ({ setIdx }) => {
  const gender = [
    { label: "---Select----", value: "" },
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIdx(1);
      }}
    >
      <h1>Form1</h1>
      <Input2
        // formik={formik}
        name="name"
        label={"First name"}
        placeholder="Enter first name"
      />
      <Input2
        // formik={formik}
        name="middlename"
        label={"Middle name"}
        placeholder="Enter middle name"
      />
      <Input2
        // formik={formik}
        name="lastname"
        label={"Last name"}
        placeholder="Enter last name"
      />
      <div className="d-flex gap1">
        <div className="w-50">
          <Select
            // formik={formik}
            label={"Gender"}
            options={gender}
            name="gender"
          />
        </div>
        <div className="w-50">
          <Input2
            // formik={formik}
            name="dob"
            label={"Date of Birth"}
            type="date"
          />
        </div>
      </div>
      <div className="form-btns">
        <button type="submit" className={`primary-button`}>
          Save & Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
