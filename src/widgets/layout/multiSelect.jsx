import { MenuItem, Select } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Multiselect = ({ options, value, handleChange }) => {
  return (
    <Select
      fullWidth
      size="small"
      multiple
      value={value}
      onChange={(event) => {
        const { target } = event;
        if (value.includes("Select")) {
          handleChange([target.value[1]]);
        } else {
          handleChange(
            typeof target.value === "string"
              ? target.value.split(",")
              : target.value
          );
        }
      }}
    >
      {options?.map(({ value, label, disable }) => (
        <MenuItem key={value} value={value} disabled={disable ? true : false}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

Multiselect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.array,
  handleChange: PropTypes.func,
};

export default Multiselect;
