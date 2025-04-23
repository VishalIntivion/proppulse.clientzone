// utils/validationUtils.js
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const validateName = (name) => {
  // Supports English, Arabic, French, and Spanish characters
  const regex =
    /^[A-Za-z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1E00-\u1EFFÀ-ÖØ-öø-ÿĀ-ž\u00C0-\u017F'’´` -]{2,}$/u;
  return regex.test(name.trim());
};

export const validatePhoneNumber = (phone) => {
  // Basic international phone number validation
  const regex = /^\+?[0-9\s\-()]{7,20}$/;
  return regex.test(phone.trim());
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,18}$/;
  return regex.test(password);
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Combine validations with custom messages
export const validateRegistrationForm = (formData) => {
  const errors = {};

  if (formData.firstName) {
    if (!validateName(formData.firstName)) {
      errors.firstName = "Invalid first name";
    }
  }

  if (formData.lastName) {
    if (!validateName(formData.lastName)) {
      errors.lastName = "Invalid last name";
    }
  }

  if (formData.email) {
    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
  }

  if (formData.phone) {
    if (!validatePhoneNumber(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  }

  if (formData.password) {
    if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be 6–18 chars, with uppercase, lowercase, number, and special character";
    }
  }

  if (formData.confirmPassword) {
    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return errors;
};

export const validateLoginForm = ({ email, password }) => {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Enter a valid email";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (!validatePassword(password)) {
    errors.password =
      "Password must be 6–18 characters, include uppercase, lowercase, number, and special character";
  }

  return errors;
};
