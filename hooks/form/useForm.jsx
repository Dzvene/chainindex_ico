import { useState } from "react";

export const useForm = (initialState) => {
  // state to track form values
  const [values, setValues] = useState(initialState);
  // state to track form errors
  const [error, setError] = useState(false);
  // state to error message if there's any
  const [errorMessage, setErrorMessage] = useState("");

  // function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setError(false);
  };

  // function to handle input file change
  const handleInputFileChange = (event) => {
    const { name, files } = event.target;

    const reader = new FileReader();
    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onload = (readerEvent) => {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: readerEvent?.target?.result,
      }));
    };
  };

  // function to validate form data and check if it's empty
  const validator = (arr) => {
    // loop through array to check if any field is empty
    const validData = arr.every((el) => values[el].trim());
    if (!validData) {
      setError(true);
      setErrorMessage(`${arr.join(", ")} are required`);
      // return false if data is not valid
      return false;
    }
    // return true if data is valid
    return true;
  };

  // function to handle submit form
  const handleSubmit = (callback) => {
    return (event) => {
      event.preventDefault();
      callback();
    };
  };

  // return all functions and state
  return {
    values,
    error,
    errorMessage,
    validator,
    handleInputChange,
    handleInputFileChange,
    handleSubmit,
  };
};
