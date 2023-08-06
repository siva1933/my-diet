import React from "react";

const Select = ({
  name,
  label,
  options = [],
  // formik,
  // onChange,
  // value,
  disabled,
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label for="" className="form-label">
          {label}
        </label>
      )}
      <select
        className="form-select"
        disabled={disabled}
        // value={value ? value : formik?.values?.[name]}
        name={name}
        aria-label={label}
        // onChange={
        //   onChange
        //     ? onChange
        //     : (e) => {
        //         formik.setFieldValue(name, e.target.value);
        //       }
        // }
      >
        {options?.map((ele) => (
          <option value={ele.value}>{ele.label}</option>
        ))}
      </select>
      {/* <p className="errorMsg">{formik.touched[name] && formik.errors[name]}</p> */}
    </div>
  );
};

export default Select;
