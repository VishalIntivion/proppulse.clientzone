// utils/validationUtils.js
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const validateName = (name) => {
  // Supports English, Arabic, French, and Spanish characters
  if (typeof name !== "string") return false;
  const trimmedName = name.trim();
  const words = trimmedName.split(/\s+/);
  if (words.length < 2) return false;

  const regex =
    /^[A-Za-z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1E00-\u1EFFÀ-ÖØ-öø-ÿĀ-ž\u00C0-\u017F'’´`-]+$/u;

  for (let word of words) {
    if (word.length < 2 || !regex.test(word)) return false;
  }
  return true;
  // return regex.test(name.trim());
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

  if (!validateName(formData.fullName)) {
    errors.fullName = "Invalid Full Name";
  }

  if (!validateName(formData.firstName)) {
    errors.firstName = "Invalid First Name";
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = "Invalid last name";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!validatePhoneNumber(formData.phone)) {
    errors.phone = "Invalid Phone Number";
  }

  if (!validatePassword(formData.password)) {
    errors.password =
      "Password must be 6–18 chars, with uppercase, lowercase, number, and special character";
  }

  if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
    errors.confirmPassword = "Passwords do not match";
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
