export const validateNumber = (input) => {
  const regex = /^[0-9]*$/;
  if (regex.test(input)) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (input) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(input)) {
    return true;
  } else {
    return false;
  }
};
