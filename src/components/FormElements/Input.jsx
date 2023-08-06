import React from "react";
export const Input2 = ({
  // formik,
  placeholder,
  name,
  type,
  label,
  minDate,
  onChange,
  value,
}) => {
  return (
    <div className="mb-2">
      {label && (
        <label for="" class="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        min={minDate ? moment(minDate)?.format("YYYY-MM-DD") : undefined}
        placeholder={placeholder}
        // value={value ? value : formik.values[name]}
        name={name}
        // onChange={
        //   onChange
        //     ? onChange
        //     : (e) => {
        //         if (type === "date") {
        //           formik.setFieldValue(
        //             name,
        //             moment(e.target.value)?.format("YYYY-MM-DD")
        //           );
        //           return;
        //         }
        //         formik.setFieldValue(name, e.target.value?.trimStart());
        //       }
        // }
      />
      {/* <p className="errorMsg">{formik.touched[name] && formik.errors[name]}</p> */}
    </div>
  );
};
