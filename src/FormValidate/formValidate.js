import * as yup from "yup";


export const RegisterSchema = yup.object().shape({
  email: yup.string().required().email("Email must be valid"),
  username: yup.string().required().min(5),
  password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Must be 8 characters and above with at least an uppercase,lowercase letter,number & special character")

}).required()

export const LogInSchema = yup.object().shape({
  email: yup.string().required().email("Email must be valid"),
  password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Must be 8 characters and above with at least an uppercase,lowercase letter,number & special character")

}).required()