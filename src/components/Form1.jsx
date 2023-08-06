import React from "react";
import { Input2 } from "./FormElements/Input";
import Select from "./FormElements/Select";

const Form1 = ({ setIdx }) => {
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
      <h1>Form2</h1>
      <Input2
        // formik={formik}
        name="username"
        label={"Username"}
        placeholder="Enter username"
      />
      <Input2
        // formik={formik}
        name="password"
        label={"Password"}
        placeholder="Enter password"
      />
      <Input2
        // formik={formik}
        name="email"
        label={"Email"}
        placeholder="Enter email"
      />
      <div className="d-flex gap1">
        <div className="w-50">
          <Select
            // formik={formik}
            label={"Department"}
            options={[{ label: "---Select----", value: "" }, ...gender]}
            name="department"
          />
        </div>
        <div className="w-50">
          <Select
            // formik={formik}
            label={"Designation"}
            options={[{ label: "---Select----", value: "" }, ...gender]}
            name="designation"
          />
        </div>
      </div>
      <div className="form-btns">
        <button
          type="button"
          className={`secondary-button mr-2`}
          onClick={(e) => {
            setIdx(0);
          }}
        >
          Back
        </button>
        <button type="submit" className={`primary-button`}>
          Save & Submit
        </button>
      </div>
    </form>
  );
};

export default Form1;
