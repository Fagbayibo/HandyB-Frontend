import * as yup from "yup";
import {isValidPhoneNumber} from "react-phone-number-input";

export const phoneSchema = yup
  .string()
  .required("Phone number is required")
  .test("is-valid", "Invalid phone number", (value) => isValidPhoneNumber(value || ""));

export const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: phoneSchema,
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});
