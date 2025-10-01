import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

// Phone validation schema
export const phoneSchema = yup
  .string()
  .required("Phone number is required")
  .test("is-valid", "Invalid phone number", (value) => isValidPhoneNumber(value || ""));

// Signup schema (Gmail only)
export const signupSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .test(
      "has-two-words",
      "Please enter your full name",
      (value) => value && value.trim().split(" ").length >= 2
    ),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[^\s@]+@gmail\.com$/,
      "Email must be a valid Gmail address"
    ),
  phone: phoneSchema,
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  termsCondition: yup
    .boolean()
    .oneOf([true], "You must accept the Terms & Policy"), // ensure checkbox is checked
});


export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid", "Invalid phone number", (value) => isValidPhoneNumber(value || "")),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
