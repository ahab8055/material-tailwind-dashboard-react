import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const AutoCompleteInput = ({ options, placeholder, value, onChange }) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={value}
      onInputChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label={placeholder}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

AutoCompleteInput.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,

};

export default AutoCompleteInput;
