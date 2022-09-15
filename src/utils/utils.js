import React, { useCallback } from "react";
import {
  EMAIL_VALUE_ERROR_MESSAGE,
  NAME_VALUE_ERROR_MESSAGE,
} from "./constants";
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]:
        evt.target.validationMessage || validateNameAndEmail(evt).errorMessage,
    });
    setIsValid(
      evt.target.closest("form").checkValidity() &&
        validateNameAndEmail(evt).isValid
    );
  };

  function validateNameAndEmail(evt) {
    const nameRegExp = /^[ a-zA-Zа-яА-ЯёЁ-]{2,30}$/;
    const emailRegExp = /[^@\s]+@[^@\s]+\.[A-Z]{2,4}$/i;
    if (evt.target.name === "name" && !nameRegExp.test(evt.target.value)) {
      return { errorMessage: NAME_VALUE_ERROR_MESSAGE, isValid: false };
    }
    if (evt.target.name === "email" && !emailRegExp.test(evt.target.value)) {
      return { errorMessage: EMAIL_VALUE_ERROR_MESSAGE, isValid: false };
    }
    return { errorMessage: undefined, isValid: true };
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
  };
}

export function handleSearch(data, searchQuery) {
  const regex = new RegExp(searchQuery, "gi");
  const movies = data.filter(
    (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
  );
  return movies;
}
